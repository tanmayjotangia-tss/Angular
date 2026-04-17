import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharedService {
  private nameData=new BehaviorSubject<string>('')
  myName=this.nameData.asObservable()
  sendName(name:string){
    this.nameData.next(name)
  }
}