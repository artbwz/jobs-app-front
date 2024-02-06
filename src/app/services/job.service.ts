import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { RUser, userSchema } from '../models/user-models';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private _baseUrl: string = environment.urlLocal;
  constructor(private http: HttpClient) {}

  async registerUser(body: RUser){
    const data = await userSchema.validate(body);
    const response = await this.http.post(this._baseUrl, data);
    return await response;
  }

  login(email: string, password: string) {
    // Send POST request to API's login route
  }

  // ... other API calls
}
