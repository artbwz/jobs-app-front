// register.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  loginUser() {
    console.log('logged');
  }
}
