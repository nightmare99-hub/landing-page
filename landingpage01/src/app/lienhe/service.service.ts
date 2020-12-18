import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly APIURL = "https://localhost:44329/api"

  constructor(private http:HttpClient) { }

  getSignList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/Sign');
  }

  addSign(val:any){
    return this.http.post(this.APIURL+'/Sign',val);
  }

  updateSign(val:any){
    return this.http.put(this.APIURL+'/Sign/',val);
  }

  deleteSign(val:any){
    return this.http.delete(this.APIURL+'/Sign/'+val);
  }
  getAllCourse():Observable<any[]>{
    return this.http.get<any[]>(this.APIURL+ '/Sign/GetAllCourse');
  }

}
