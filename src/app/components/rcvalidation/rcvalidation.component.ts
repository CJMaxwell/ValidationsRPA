import { Component, OnInit } from '@angular/core';
import { RcvalidationService } from 'src/app/services/rcvalidation.service';

@Component({
  selector: 'rpa-rcvalidation',
  templateUrl: './rcvalidation.component.html',
  styleUrls: ['./rcvalidation.component.css']
})
export class RcvalidationComponent implements OnInit {
  rcNumber = '';
  password = '';
  email = '';
  coyName = '';
  data = [
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
  ];

  public mainpage = 1;


  constructor(
    private rcvalidationService: RcvalidationService
  ) { }

  ngOnInit(): void {
  }

  validateRCNumber() {
    let payload = this.rcNumber.replace(/\s/g, '');
    console.log(payload, 'RC');
    console.log(this.data[0]["Company Name"])
    this.coyName = this.data[0]["Company Name"];
    this.mainpage = 2;
    // this.rcvalidationService.getRCValidation(payload).subscribe({
    //   next: (res) => {
    //     //@ts-ignore
    //     if (res.length > 0) {
    //       console.log(this.data[0]["Company Email Address"], 'hhhhj')
    //     }
    //   }
    // })

  }

}
