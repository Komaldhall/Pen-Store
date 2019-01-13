import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  newProd={name:'', quantity:'', price:'',id:'', description:'', image:''};
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log("m here in new product page");
    this.newProd={name:'', quantity:'', price:'',id:'', description:'', image:''};
    
  }
  onSubmit(){
    console.log(this.newProd);
    let check = this._httpService.checkProductCount();
    check.subscribe((data:any)=>{
      console.log("checked");

      console.log(data.length);
      if(data.length!=''){
        this.newProd.id=data.length+1;
      }
      else{
        this.newProd.id='1';
      }
      
      let tempObservable = this._httpService.addProducts(this.newProd);
      tempObservable.subscribe((data:any)=>{
      console.log("added");
      console.log(data);
      window.location.replace("/products");
    })
      
    })
    
  }
}
