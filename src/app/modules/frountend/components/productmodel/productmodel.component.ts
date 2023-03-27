import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { product } from 'src/interfaces/products';
import agents from 'src/Model/agents';

@Component({
  selector: 'app-productmodel',
  templateUrl: './productmodel.component.html',
  styleUrls: ['./productmodel.component.css']
})
export class ProductmodelComponent implements OnInit {
  @Input() id:any;
  Getsingleproduct:any=[];

  ngOnChanges(changes: SimpleChanges) { 
    // console.log('Input data:', this.id);
     agents.products.GetSingleProduct(this.id).then(Response=>{
        console.log(Response);
        this.Getsingleproduct=Response;
      }).catch(error=>{
        console.log(error);
      })
  }
  constructor(){

  }
  ngOnInit(){
  }
  
}
