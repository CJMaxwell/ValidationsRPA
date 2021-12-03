import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rcPayload } from '../models/rc-payload/rc-payload.model';
import { BASE_URL, httpOption } from './shared/utils.service';

@Injectable({
  providedIn: 'root'
})
export class RcvalidationService {

  constructor(
    private http: HttpClient
  ) { }

  public getRCValidation(payload: string) {
    this.http.get(`${BASE_URL}/tinvalidation/${payload}`, {
      headers: httpOption
    })
  }
}
