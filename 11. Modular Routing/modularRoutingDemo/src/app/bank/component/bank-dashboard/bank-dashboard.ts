import { Component, ElementRef, ViewChild } from '@angular/core';
import { BankRegistrationService } from '../../service/bank-registration-service';

@Component({
  selector: 'app-bank-dashboard',
  standalone: false,
  templateUrl: './bank-dashboard.html',
  styleUrl: './bank-dashboard.css',
})
export class BankDashboard {
  constructor(private bankService:BankRegistrationService){}
  @ViewChild('inputRef') inputData!:ElementRef
  bankName=""
  sendName(){
    this.bankName = this.inputData.nativeElement.value
    this.bankService.bankRegistration(this.bankName)
  }
}
