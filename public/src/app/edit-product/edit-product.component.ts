import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  prod = {name:'', quantity:'', price:'',_id:'', id:'', description:'', image:''};
  get_id='';
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.get_id = params['id'];
      console.log("m in edit product page");
      console.log(this.get_id);
      this.getEdit();
    })
  }
  getEdit(){
    let prod = this._httpService.getEditProducts(this.get_id);
    prod.subscribe((data:any)=>{
      this.prod = data;
      console.log(data);
    })

  }
  onSubmit(){
    let tempObservable = this._httpService.EditProducts(this.prod);
    tempObservable.subscribe((data:any)=>{
      console.log("edit product");
      console.log(data);
      window.location.replace("/products");
      // this._router.navigate(['/products']);
    })
  }
  onReset(){
    this.ngOnInit();
  }
  onDelete(){
    console.log('here in delete');
    let prod = this._httpService.deleteProducts(this.get_id);
    prod.subscribe((data:any)=>{
      console.log(data);
      if(!data.errors){
        window.location.replace("/products");
        // this._router.navigate(['/products']);
      }
      
    })
    
  }
}
