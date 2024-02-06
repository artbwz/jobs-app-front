import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  jobForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private jobService: JobService) {}

  ngOnInit() {
    this.jobForm = this.formBuilder.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      status: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      this.jobService.createJob(this.jobForm.value).subscribe(() => {
        this.router.navigate(['/jobs']); // Redirect to job list
      });
    }
  }
}
