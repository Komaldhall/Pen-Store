import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-one-product',
  templateUrl: './show-one-product.component.html',
  styleUrls: ['./show-one-product.component.css']
})
export class ShowOneProductComponent implements OnInit {
  product={name:'', quantity:'', price:'', _id:'', description:'', image:''};
  id='';
  display = 0;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id'];
      console.log(this.id);
      this.getThisProduct();
    })
  }
  getThisProduct(){
    let product = this._httpService.getEditProducts(this.id);
    product.subscribe((data:any)=>{
      this.product = data;
      if(this.product.quantity==null || this.product.quantity=='0'){
        this.display = 1;
      }
      else{
        this.display=0;
      }
    })
  }
  onDelete(){
    console.log('here in delete');
    let product = this._httpService.deleteProducts(this.id);
    product.subscribe((data:any)=>{
      console.log(data);
      if(!data.errors){
        this._router.navigate(['/products']);
      }
      
    })
    
  }

}
