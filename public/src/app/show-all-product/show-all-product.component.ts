import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-all-product',
  templateUrl: './show-all-product.component.html',
  styleUrls: ['./show-all-product.component.css']
})
export class ShowAllProductComponent implements OnInit {
  products=[{name:'', quantity:'', price:'', _id:'', description:'', image:''}]
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log('here i am in show all products');
    let tempObservable = this._httpService.getProducts();
    tempObservable.subscribe((data:any)=>{
      this.products = data;
    })
  }
  
}
