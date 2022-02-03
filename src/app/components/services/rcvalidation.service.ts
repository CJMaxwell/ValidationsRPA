import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { rcPayload } from '../models/rc-payload/rc-payload.model';
import { BASE_URL, httpOption } from './shared/utils.service';

@Injectable({
  providedIn: 'root'
})
export class RcvalidationService {

  constructor(
    private http: HttpClient
  ) { }

  public getRCValidation(payload: string) {
    // let url = `${BASE_URL}/tinvalidation/${payload}`;
    // console.log(url, 'URL Here');
    // console.log(httpOption, 'headers');
    let url = `${BASE_URL}?RCNumber=${payload}`;
    return this.http.get(`${BASE_URL}?RCNumber=${payload}`)
  }
}


// http://13.92.56.119/kycapi/api/KYC/Validate?RCNumber=
