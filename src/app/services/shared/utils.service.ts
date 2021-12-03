// import { Injectable } from '@angular/core';

import { HttpHeaders } from "@angular/common/http";

// @Injectable({
//   providedIn: 'root'
// })
// export class UtilsService {

//   constructor() { }
// }

export const BASE_URL = 'http://13.92.56.119:9810';
export const API_KEY = 'jojo34567866';

export const httpOption = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  Authorization: `${API_KEY}`
});
