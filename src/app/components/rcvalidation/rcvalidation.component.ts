import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpa-rcvalidation',
  templateUrl: './rcvalidation.component.html',
  styleUrls: ['./rcvalidation.component.css']
})
export class RcvalidationComponent implements OnInit {
  rcNumber = '';
  data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  validateRCNumber() {

    this.data = [
      {
        "Company Email Address": "yemi@logicpointng.com",
        "Company JTB TIN": "1052540653",
        "Company Name": "LOGICPOINT INTEGRATED CONCEPTS LIMITED",
        "Company Phone Number": "018888185",
        "Company RC Number": "RC1627059",
        "Company TIN": "21637569-0001",
        "Company Tax Office": "MSTO ILUPEJU II",
        "Status": "VERIFIED"
      }
    ]
  }
}
