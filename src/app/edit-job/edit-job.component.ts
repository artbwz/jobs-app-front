import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  jobForm: FormGroup;
  job: any;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private jobService: JobService) {}

  ngOnInit() {
    this.jobForm = this.formBuilder.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      status: ['', Validators.required],
      description: ['']
    });

    const jobId = this.route.snapshot.paramMap.get('id');
    this.jobService.getJob(jobId).subscribe(job => {
      this.job = job;
      this.jobForm.patchValue(job);
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      this.jobService.updateJob(this.job.id, this.jobForm.value).subscribe(() => {
        this.router.navigate(['/jobs']); // Redirect to job list
      });
    }
  }
}
