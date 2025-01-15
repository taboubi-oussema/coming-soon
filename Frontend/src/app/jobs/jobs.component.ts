import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobs: any[] = [
    {
      title: 'Product Manager',
      company: 'spotify',
      location: 'Glendale, CA',
      type: 'Full Time',
      category: 'Marketing',
      salary: '$2,000 - 5,000',
      period: 'Monthly',
      logoType: 'Group 512942',
      buttonVariant: 'dark'
    },
    {
      title: 'Product Designer',
      company: 'pinterest',
      location: 'Glen wood, CA',
      type: 'Part Time',
      category: 'Designer',
      salary: '$2,000 - 5,000',
      period: 'Monthly',
      logoType: 'Group 512926'
    },
    {
      title: 'Recruiting Coordinator',
      company: 'google',
      location: 'Tropico, CA',
      type: 'Part Time',
      category: 'Customers Service',
      salary: '$2,000 - 5,000',
      period: 'Monthly',
      logoType: 'Group 512927'
    },
    {
      title: 'Software Engineer',
      company: 'apple',
      location: 'Greenbriar, CA',
      type: 'Part Time',
      category: 'Developer',
      salary: '$2,000 - 5,000',
      period: 'Monthly',
      logoType: 'Group 512928'
    },
    {
      title: 'Customer Support',
      company: 'whatsapp',
      location: 'Rosemeyere, CA',
      type: 'Part Time',
      category: 'Support',
      salary: '$2,000 - 5,000',
      period: 'Monthly',
      logoType: 'Group 512929'
    },
    {
      title: 'UI/UX Designer',
      company: 'dribbble',
      location: 'Granolview, CA',
      type: 'Part Time',
      category: 'Designer',
      salary: '$2,000 - 5,000',
      period: 'Monthly',
      logoType: 'Group 512925 '
    }
  ];

}
