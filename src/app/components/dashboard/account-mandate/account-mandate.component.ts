import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'rpa-account-mandate',
  templateUrl: './account-mandate.component.html',
  styleUrls: ['./account-mandate.component.css']
})
export class AccountMandateComponent implements OnInit {
  accountNumber = 0;
  accountMadateForm: FormGroup;
  accountMadateNonDirectorsForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.accountMadateForm = this.fb.group({
      mandates: this.fb.array([]),
    });

    this.accountMadateNonDirectorsForm = this.fb.group({
      nonMandates: this.fb.array([]),
    });
  }

  ngOnInit(): void {

  }

  mandates(): FormArray {
    return this.accountMadateForm.get("mandates") as FormArray
  }

  newMandate(): FormGroup {
    return this.fb.group({
      bvn: '',
    })
  }

  addMandate() {
    this.mandates().push(this.newMandate());
  }

  removeMandate(i: number) {
    this.mandates().removeAt(i);
  }


  nonMandates(): FormArray {
    return this.accountMadateNonDirectorsForm.get("nonMandates") as FormArray
  }

  newNonMandate(): FormGroup {
    return this.fb.group({
      bvn: '',
    })
  }

  addNonMandate() {
    this.mandates().push(this.newMandate());
  }

  removeNonMandate(i: number) {

    this.mandates().removeAt(i);
  }
}
