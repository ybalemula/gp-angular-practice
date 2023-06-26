import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http'
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }
  RequestPara: { Id: number, ModeParameter: string, Apictrl: string, DataList: any } = {
    Id: 0,
    ModeParameter: '',
    Apictrl: '',
    DataList: []
  };
  CustomData(Id: number, ModeParameter: string, Apiname: string, entity: any): Observable<any> {
    this.RequestPara.Id = Id;
    this.RequestPara.ModeParameter = ModeParameter;
    this.RequestPara.Apictrl = Apiname;
    this.RequestPara.DataList.push(entity);
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.RequestPara);
    let url = `http://localhost:57066/api/` + Apiname;
    return this.http.post(url, body, { 'headers': headers })

  }

  SaveRupdate(ModeParameter: string, Apiname: string, entity: any): Observable<any> {
    this.RequestPara.Id = 0;
    this.RequestPara.DataList = [];
    this.RequestPara.ModeParameter = ModeParameter;
    this.RequestPara.Apictrl = Apiname;
    this.RequestPara.DataList.push(entity);
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.RequestPara);
    let url = `http://localhost:57066/api/` + Apiname;
    return this.http.post(url, body, { 'headers': headers })

  }
  getData(Apiname: string): Observable<any> {
    this.RequestPara.Id = 0;
    this.RequestPara.DataList = [];
    this.RequestPara.ModeParameter = 'search';
    this.RequestPara.Apictrl = Apiname;
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.RequestPara);
    let url = `http://localhost:57066/api/` + Apiname;
    return this.http.post(url, body, { 'headers': headers })

  }
}
