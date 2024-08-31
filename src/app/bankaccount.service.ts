import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankaccountService {

  public baseUrl:string ="https://6128991386a213001729f9df.mockapi.io/test/v1/principals";

  constructor(private _httpClient:HttpClient) { }

  getbankaccounts():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  getbankaccount(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id);
  }

  updatebankaccount(data:any, id:string):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data);
  }

  getFilteredbankaccounts(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }

  getSortedbankaccounts(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }

  createbankaccounts(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data);
  }

  getLimitdbankaccounts(count:number, page:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit="+count+"&page="+page);
  }
}