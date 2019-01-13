import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  checkProductCount(){
    return this._http.get('/check');
  }
  getProducts(){
    return this._http.get('/produ');
  }
  
  deleteProducts(id){
    return this._http.delete(`/produ/${id}`);
  }
  addProducts(productsObj){
    console.log('here');
    return this._http.post('/produ', productsObj);
  }
  getEditProducts(id){
    return this._http.get(`/produ/${id}`);
  }
  EditProducts(productsObj){
    return this._http.put(`/produ/${productsObj.id}`,productsObj);
  }
  // addReview(reviewObj, id){
  //   return this._http.put(`/products/${id}/review`,reviewObj);
  // }
  // findProducts(name){
  //   return this._http.get(`/products/check/${name}`);
  // }
}
