import { Component, OnInit } from '@angular/core';
import { RcvalidationService } from 'src/app/components/services/rcvalidation.service';

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
  accountNumber = '';
  isChecked = false;
  accountOption = '';
  loading = false;
  response: any;
  // data = [
  //   {
  //     "Company Email Address": "yemi@logicpointng.com",
  //     "Company JTB TIN": "1052540653",
  //     "Company Name": "LOGICPOINT INTEGRATED CONCEPTS LIMITED",
  //     "Company Phone Number": "018888185",
  //     "Company RC Number": "RC1627059",
  //     "Company TIN": "21637569-0001",
  //     "Company Tax Office": "MSTO ILUPEJU II",
  //     "Status": "VERIFIED"
  //   }
  // ];

  public mainpage = 1;


  constructor(
    private rcvalidationService: RcvalidationService
  ) { }

  ngOnInit(): void {
  }

  validateRCNumber() {

    let payload = this.rcNumber.replace(/\s/g, '');

    this.loading = true;

    // this.rcvalidationService.getRCValidation(payload).subscribe({
    //   next: (res) => {
    //     console.log(res, 'API response');
    //     //@ts-ignore
    //     this.response = JSON.parse(res.result);
    //     this.coyName = this.response[0]["Company Name"];
    //     if (this.coyName) {
    //       this.loading = false;
    //       this.mainpage = 2;

    //     } else {
    //       this.loading = false;
    //     }


    //   }
    // })
    this.coyName = 'Efo Global Systems Limited'
    this.mainpage = 2;
  }

}
