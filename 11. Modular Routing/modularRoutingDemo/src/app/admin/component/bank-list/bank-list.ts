import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-list',
  standalone: false,
  templateUrl: './bank-list.html',
  styleUrl: './bank-list.css',
})
export class BankList {
  bankName=""
  ngOnInit(){
    this.bankName=localStorage.getItem('bankName')!
  }
}
