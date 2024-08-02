import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  favoriteFramework = '';
  name=''
  showFramework() {
    alert(this.favoriteFramework);
  }
  showName() {
    alert(this.name);
  }
  showForm() {
    alert(this.favoriteFramework+" "+this.name);
  }
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}


