// import { Injectable } from '@angular/core';

import { HttpHeaders } from "@angular/common/http";

// @Injectable({
//   providedIn: 'root'
// })
// export class UtilsService {

//   constructor() { }
// }

export const BASE_URL = 'http://40.112.51.63/kycapi/api/kyc';
export const API_KEY = 'jojo34567866';

export const httpOption = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  Authorization: `${API_KEY}`
});


export function generateRandomNumber(length = 8) {
  return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));

}
