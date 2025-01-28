import { Component } from '@angular/core';
import { APISService } from '../../services/apis.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent {
  constructor(private API: APISService) {
    API.getJob().subscribe((data) => {
      console.log(data), (this.jobs = data);
    });
  }
  logoType = 'Group 512927';
  jobs: any;
  showAlert(): void {
    alert('thank you for apply!');
  }
}
