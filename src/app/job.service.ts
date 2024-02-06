import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) {}

  registerUser(email: string, name: string, password: string) {
    // Send POST request to API's register route
  }

  login(email: string, password: string) {
    // Send POST request to API's login route
  }

  // ... other API calls
}
