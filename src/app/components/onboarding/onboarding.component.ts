import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'rpa-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitDocs() {
    setTimeout(() => {
      this.successSwal();
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
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/']);
        });
      })
  }
}
