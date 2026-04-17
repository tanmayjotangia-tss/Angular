import { Component } from '@angular/core';
import { DataSharedService } from '../../../shared/service/data-shared-service';

@Component({
  selector: 'app-bank-list',
  standalone: false,
  templateUrl: './bank-list.html',
  styleUrl: './bank-list.css',
})
export class BankList {
  constructor(private dataSharedService:DataSharedService){}
  bankName=""
  ngOnInit(){
    // this.bankName=localStorage.getItem('bankName')!
    this.dataSharedService.myName.subscribe(name => {this.bankName=name})
  }
}
