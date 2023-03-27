import * as $ from 'jquery';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import agents from 'src/Model/agents';
import { ToastrService } from 'ngx-toastr';
import { review } from 'src/interfaces/review';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-customization',
  templateUrl: './product-customization.component.html',
  styleUrls: ['./product-customization.component.css']
})
export class ProductCustomizationComponent implements OnInit {

  increaseanddecrease:number=1;
  productid:any;
  singleproduct:any;
  addingitems:{}={};
  Userid:any=localStorage.getItem("Userid");
  custom:string="";
  reviewName:string="";
  Review:any;
  AllReviews?:review[];
  countofreview:any;
  rating:number=0;

  ngAfterViewInit() {
    $('.tabre').hide();
    $('.descriptionbtn').addClass('buttonactive');
    $('.reviewbtn').addClass('buttonInactive');
  }
  description(){
    $('#tab-description').show(); 
    $('.tabre').hide();
    $('.descriptionbtn').addClass('buttonactive');
    $('.descriptionbtn').removeClass('buttonInactive');
    $('.reviewbtn').addClass('buttonInactive');
  }
  review(){
    $('.tabre').show();
    $('#tab-description').hide(); 
    $('.reviewbtn').addClass('buttonactive');
    $('.reviewbtn').removeClass('buttonInactive');
    $('.descriptionbtn').addClass('buttonInactive');
  }

  plus(){
    this.increaseanddecrease++;
  }

  minus(){
    if(this.increaseanddecrease !=0){
    this.increaseanddecrease--;
    }
  }

  constructor(private route:ActivatedRoute,private toast:ToastrService,private changeDetectorRef: ChangeDetectorRef){

  }
  ngOnInit(){
    this.route.params.subscribe(params=>{
       this.productid=params['id'];
      console.log(this.productid);
    })
    agents.products.GetSingleProduct(this.productid).then(Response=>{
      this.singleproduct=Response;
    }
    )
    this.getReview();
  }
  Addtocart(){
    this.addingitems={userId: this.Userid,
    image:this.singleproduct.image,
    name: this.singleproduct.name,
    brand: this.singleproduct.brand,
    quentity: this.increaseanddecrease,
    customization:this.custom}

    agents.cartItems.Addtocart(this.addingitems).then(Response=>{
      this.toast.success("Added to Cart Successfully");
      console.log(Response);
    }).catch(error=>{
      console.log(error);
    })
    this.ngAfterViewInit();
  }
  AddReview(){
    agents.review.AddReview({productid:this.productid,name:this.reviewName,review:this.Review,rating:this.rating}).then(Response=>{
      this.getReview();
      this.toast.success("Review added Successfully");
    }).catch(error=>{
      console.log(error);
    });
  }

  getReview(){
    agents.review.getReview(this.productid).then(response=>{
      this.AllReviews=response;
      this.countofreview=response.length;
      this.changeDetectorRef.detectChanges();
    }).catch(error=>{
      console.log(error);
    });
  }

  setRating(rating: number) {
    this.rating = rating;
  }
  
}
