import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'rpa-account-mandate',
  templateUrl: './account-mandate.component.html',
  styleUrls: ['./account-mandate.component.css']
})
export class AccountMandateComponent implements OnInit {
  accountNumber = 0;
  directorAccountMandateForm: FormGroup;
  nonDirectorsAccountMandateForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) {
    this.directorAccountMandateForm = this.fb.group({
      directorMandates: this.fb.array([]),
    });

    this.nonDirectorsAccountMandateForm = this.fb.group({
      nonDirectorsMandates: this.fb.array([]),
    });
  }

  ngOnInit(): void {

  }

  directorMandates(): FormArray {
    return this.directorAccountMandateForm.get("directorMandates") as FormArray
  }

  newDirectorMandate(): FormGroup {
    return this.fb.group({
      director: '',
      directorSignature: null,
      directorId: null
    })
  }

  addDirectorMandate() {
    this.directorMandates().push(this.newDirectorMandate());
  }

  removeDirectorMandate(i: number) {
    this.directorMandates().removeAt(i);
  }

  //---------------NON Directors -----------------//

  nonDirectorsMandates(): FormArray {
    return this.nonDirectorsAccountMandateForm.get("nonDirectorsMandates") as FormArray
  }

  newNonDirectorsMandate(): FormGroup {
    return this.fb.group({
      bvn: '',
      nonDirectorSignature: null,
      nonDirectorId: null
    })
  }

  addNonDirectorsMandate() {
    this.nonDirectorsMandates().push(this.newNonDirectorsMandate());
  }

  removeNonDirectorsMandate(i: number) {

    this.nonDirectorsMandates().removeAt(i);
  }

  close() {
    this.router.navigate(['/']);
  }

  submit() {
    setTimeout(() => {
      this.successSwal();
    }, 15);
  }

  successSwal(msg?: string) {
    swal.fire({
      title: 'Success',
      text: msg ? msg : 'Mandates sent for approval.',
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
