import { Component } from '@angular/core';
import { APISService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  userData:any={
    First_Name:"",
    Last_Name:"",
    Email:"",
    State:"",
    Password:""
  };
  constructor(private API: APISService) {
    if (API.userId != null) {
      API.getUserById().subscribe((data) => (this.userData = data));
    } else {
      console.log('no user');
    }
  }

  onSubmit() {
    console.log('Form Submitted!', this.userData);
    this.API.updateUser(this.userData).subscribe(()=>alert('Update success'))
  }
}
