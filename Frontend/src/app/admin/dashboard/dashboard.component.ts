import { Component, OnInit } from '@angular/core';
import { APISService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor(private API: APISService) {
    API.getUsers().subscribe((data) => (this.data = data));
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
    if (confirm('Are you sure you want to delete this user?')) {
      this.API.deletUser(id).subscribe((data) => {
        alert('User deleted successfully.');
        location.reload();
      });
    }
  }
}
