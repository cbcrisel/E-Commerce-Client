import { Constants } from 'src/app/Constants';
import * as CryptoJS from 'crypto-js';
import { stringify } from 'querystring';
export class Utils {
    public static set(key: string, value: any) {
      
        sessionStorage.setItem(key, this.encryptData(value));
        
    }

    public static get(key: string): string {
         let item=sessionStorage.getItem(key);
         let decrypt=this.decryptData(sessionStorage.getItem(key))
         if(item!=null){

        
        //  console.log('ITEM    '+item);
        //  console.log('DECRIPT '+decrypt)
       
         if(stringify(item).localeCompare(stringify(decrypt))==0 ){
         Utils.set(Constants.ERROR_LOCAL_VARIABLES,'asds');
         }
        }
         return decrypt;
         
    }
  
    public static delete(key: string) {
        sessionStorage.removeItem(key);
    }

    public static deleteAll() {
        sessionStorage.clear();
    }

    private static encryptData(data) {

        try {
          return CryptoJS.AES.encrypt(JSON.stringify(data),"ASecretKeyAlmacen2020").toString();
        } catch (e) {
          console.log(e);
        }
      }
    
    private static decryptData(data) {
    
        try {
          const bytes = CryptoJS.AES.decrypt(data, "ASecretKeyAlmacen2020");
          if (bytes.toString()) {
            return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          }
          return data;
        } catch (e) {
        //  console.error(e);
         
        }
      }
}