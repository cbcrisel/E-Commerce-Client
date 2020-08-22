import { Component, OnInit } from '@angular/core';
import { Constants } from '../../Constants';
import { Router } from '@angular/router';
import { ShipmentService } from '../../services/shipment/shipment.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {
  shipments:any[];
  constructor(
    private router:Router,
    private _shipmentService:ShipmentService
  ) { 
    this.shipments=[];
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
}
