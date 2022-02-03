import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  acctInfo = {
    accountType: '',
    accountCurrency: '',
    accountOption: ''
  }



  public mainpage = 1;


  constructor(
    private rcvalidationService: RcvalidationService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  validateRCNumber() {

    let payload = this.rcNumber.replace(/\s/g, '');

    this.loading = true;

    this.rcvalidationService.getRCValidation(payload).subscribe({
      next: (res) => {
        //@ts-ignore
        if (res.code == "200") {
          //@ts-ignore
          this.response = JSON.parse(res.object);
          this.coyName = this.response[0]["Company Name"];
          localStorage.setItem('coyName', this.coyName);
          localStorage.setItem('coy', JSON.stringify(this.response[0]));
          this.loading = false;
          this.mainpage = 2;
        }
        else {
          this.loading = false;
        }

      }
    })

  }

  goNext() {
    setTimeout(() => {
      localStorage.setItem('acctInfo', JSON.stringify(this.acctInfo));
    }, 15)
    this.router.navigate(['/onboarding']);
  }

}
