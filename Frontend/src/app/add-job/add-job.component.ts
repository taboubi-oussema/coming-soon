import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APISService } from '../services/apis.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
})
export class AddJobComponent {
  constructor(private API: APISService, private route: Router) {}
  job: any = {
    title: '',
    company: '',
    location: '',
    type: '',
    category: '',
    salary: '',
    period: '',
  };
  submitJob() {
    this.API.addJob(this.job).subscribe(
      (data) => {
        alert('Job added successfully!');
        this.route.navigate(['/Jobs']);
      },
      (error) => {
        alert('Failed to add the job. Please try again.');
        console.error(error);
      }
    );
  }
}
