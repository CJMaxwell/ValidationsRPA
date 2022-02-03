import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpa-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  nuban: string | null = null;
  coyName: string | null = null;
  coyDetails: any;
  coy: any;
  localAcctInfo: any;
  acctInfo: any;

  accountType = ""; accountCurrency = ""; accountOption = "";


  constructor() { }

  ngOnInit(): void {
    this.nuban = localStorage.getItem("accountNumber");
    this.coyName = localStorage.getItem("coyName");

    this.coyDetails = localStorage.getItem("coy")
    this.coy = JSON.parse(this.coyDetails);

    this.localAcctInfo = localStorage.getItem("acctInfo");
    this.acctInfo = JSON.parse(this.localAcctInfo);
  }

}
