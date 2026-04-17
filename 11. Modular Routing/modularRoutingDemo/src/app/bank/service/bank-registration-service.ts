import { Injectable } from '@angular/core';
import { DataSharedService } from '../../shared/service/data-shared-service';

@Injectable({
  providedIn: 'root',
})
export class BankRegistrationService {
  constructor(private dataSharedService:DataSharedService){}
  bankRegistration(data:any){
    // localStorage.setItem('bankName',data)
    this.dataSharedService.sendName(data)
  }
}
