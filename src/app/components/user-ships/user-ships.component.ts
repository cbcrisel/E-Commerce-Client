import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../../services/shipment/shipment.service';
import * as html2pdf from 'html2pdf.js'


@Component({
  selector: 'app-user-ships',
  templateUrl: './user-ships.component.html',
  styleUrls: ['./user-ships.component.css']
})
export class UserShipsComponent implements OnInit {
  shipments:[];
  shipEmpty:boolean;
  constructor(
    private _shipService: ShipmentService
  ) {
    this.shipments=[];
    this.shipEmpty=false;
   }

  ngOnInit() {
    this.getShips();
  }
  
  getShips(){
    this._shipService.getShipsOfAUser().subscribe(
      Response=>{
        
        if(Response==null){
          this.shipEmpty=true;
        }else{
        this.shipments=Response;
        }
      }
    )
  }
  download(){
    const options ={
      name:'envio.pdf',
      image:{type:'jpeg'},
      html2canvas:{},
      jsPDF:{orientation:'landscape'}
    }
    const ele:Element=document.getElementById('table');
    html2pdf()
      .from(ele)
      .set(options)
      .save()
  }
}
