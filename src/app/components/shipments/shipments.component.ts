import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Constants } from '../../Constants';
//import  *  as jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { ShipmentService } from '../../services/shipment/shipment.service';
import { jsPDF } from 'jspdf';
import { element } from 'protractor';
import * as html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {
  @ViewChild('content',{static:true}) content:ElementRef;
  view:boolean;
  shipments:any[];
  constructor(
    private router:Router,
    private _shipmentService:ShipmentService
  ) { 
    this.shipments=[];
    this.view=false;
  }

  ngOnInit() {
    this.getShips();
  }
  getShips(){
    this._shipmentService.getShips().subscribe(
      Response=>{
        this.shipments=Response;
        console.log(this.shipments);
      }
    )
  }
  setInNextStage(shipId){
    this._shipmentService.changeStage(shipId).subscribe(
      Response=>{
        console.log(Response);
        location.reload();
      }
    )
  }
  /* download(){
    var element = document.getElementById('content')
    html2canvas(element).then((canvas)=>{
      console.log(canvas)
      var imgData=canvas.toDataURL('image/png')
      var doc = new jsPDF()
      var imgHeight = canvas.height*208/canvas.width;
      doc.addImage(imgData,0,0,210,imgHeight)
      doc.save('envio.pdf')
    })
  } */
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
