import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job: any;

  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const jobId = params['id'];
      this.jobService.getJob(jobId).subscribe(job => {
        this.job = job;
      });
    });
  }

  onEditJob(job) {
    // Navigate to edit job component or edit here
  }

  onDeleteJob(job) {
    this.jobService.deleteJob(job.id).subscribe(() => {
      // Navigate back or display success message
    });
  }
}
