import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BankRegistrationService {
  bankRegistration(data:any){
    localStorage.setItem('bankName',data)
  }
}
