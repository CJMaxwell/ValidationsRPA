import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { generateRandomNumber } from '../services/shared/utils.service';


@Component({
  selector: 'rpa-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  accountNumber = '';

  cacReg = '';
  boardRes = '';
  memorandum = '';
  formC = '';
  formCac = '';
  partnershipAg = '';
  scuml = '';
  address = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitDocs() {
    setTimeout(() => {
      this.getAccountNumber();
      this.successSwal();
    }, 15);
  }

  uploadLater() {
    setTimeout(() => {
      this.getAccountNumber();
      this.router.navigate(['/dashboard']);
    }, 15);

  }

  successSwal(msg?: string) {
    swal.fire({
      title: 'Success',
      text: msg ? msg : 'Documents uploaded successfully.',
      icon: 'success',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn-success'
      }
    })
      .then((result) => {
        this.router.navigate(['/dashboard']);

        // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        // });
      })
  }

  getAccountNumber() {
    this.accountNumber = `01${generateRandomNumber()}`;
    localStorage.setItem('accountNumber', this.accountNumber);
  }
}
