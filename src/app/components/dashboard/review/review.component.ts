import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpa-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  today: Date | undefined;
  coyDetails: any;
  coy: any;
  nuban: string | null = null;
  localAcctInfo: any;
  acctInfo: any;


  constructor() { }

  ngOnInit(): void {
    this.today = new Date();
    this.nuban = localStorage.getItem("accountNumber");
    this.coyDetails = localStorage.getItem("coy")
    this.coy = JSON.parse(this.coyDetails);
    this.localAcctInfo = localStorage.getItem("acctInfo");
    this.acctInfo = JSON.parse(this.localAcctInfo);
  }

}
