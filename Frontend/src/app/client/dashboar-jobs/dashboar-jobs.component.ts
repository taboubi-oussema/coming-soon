import { Component } from '@angular/core';
import { APISService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-dashboar-jobs',
  templateUrl: './dashboar-jobs.component.html',
  styleUrls: ['./dashboar-jobs.component.css']
})
export class DashboarJobsComponent {
  data: any;
    constructor(private API: APISService) {
      API.getJob().subscribe((data) => (this.data = data));
    }
    ngOnInit(): void {}
    stats = [
      {
        title: 'Total User',
        value: '40,689',
        change: '+5.3%',
        trend: 'up',
        icon: '👥',
        color: 'purple',
      },
      {
        title: 'Total Order',
        value: '10,293',
        change: '+1.2%',
        trend: 'up',
        icon: '📦',
        color: 'yellow',
      },
      {
        title: 'Total Payments',
        value: '$89,000',
        change: '-3.1%',
        trend: 'down',
        icon: '💵',
        color: 'green',
      },
      {
        title: 'Total Pending',
        value: '2040',
        change: '+18.1%',
        trend: 'up',
        icon: '⏳',
        color: 'red',
      },
    ];

    deleteUser(id: number) {
      if (confirm('Are you sure you want to delete this Job?')) {
        this.API.deletJob(id).subscribe((data) => {
          alert('Job deleted successfully.');
          location.reload();
        });
      }
    }

}
