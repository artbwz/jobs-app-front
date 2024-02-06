// register.component.ts
import { Component } from '@angular/core';
import { JobService } from '../services/job.service';
import { RUser } from '../models/user-models';
import { User } from '../models/user-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private jobService: JobService,
  ) { }

  async submmit() {
    try {
      let res;
      res = await this.jobService.registerUser(this.)
    } catch (error) {
      
    }
    
    }
}
