import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, tap } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class DataService{
    apiurl="https://localhost:7022/api/";

    constructor(private http:HttpClient){

    }
    
    GetAllproduct(userid:number):Observable<object>{
        return this.http.get(this.apiurl+`Products/Get/${userid}`)
    }

    likeproduct(body:{}):Observable<object>{
        return this.http.post(this.apiurl+'LikeProducts/Post',body)
    }

    // getproduct(productid:number):Observable<object>{
    //     return this.http.post(this.apiurl+'')
    // }
}