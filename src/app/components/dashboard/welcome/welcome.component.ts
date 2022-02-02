import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpa-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  nuban: string | null = null;
  constructor() { }

  ngOnInit(): void {
    this.nuban = localStorage.getItem("accountNumber");
  }

}
