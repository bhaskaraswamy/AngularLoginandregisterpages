import { Component ,OnInit,ChangeDetectorRef } from '@angular/core';
import { product } from 'src/interfaces/products';
import agents from 'src/Model/agents';
import { HttpClient } from '@angular/common/http';
import { Observable,of,Subject, tap } from 'rxjs';
import { DataService } from 'src/Model/data.services';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  userid:any=localStorage.getItem("Userid");
  allproducts$?: product[]  ;
  productid:any;
  


  constructor(private service:DataService,private cdr: ChangeDetectorRef){

  }

  
    OnproductClick(id:number){
      this.productid=id;
    }

    Like(productId:number){
      this.service.likeproduct({userId:this.userid,productId:productId}).subscribe(result=>{
        this.allproducts$?.filter(p=>p.id===productId).map(p=>p.likedproduct === true ? p.likedproduct=false: p.likedproduct=true);
      });
    }

    ngOnInit(){
      this.service.GetAllproduct(this.userid).subscribe(async data=>{
        const products = await data as product[]
        this.allproducts$ = products;
      });
    }
}
