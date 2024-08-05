import { Component, inject } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import {UpperCasePipe, LowerCasePipe } from '@angular/common';
import { StarPipe } from '../pipes/star.pipe';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, UpperCasePipe, LowerCasePipe, StarPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  display = ''
  displayTwo = ''
  constructor(private us: UserService) {
    this.display = this.userService.getCars().join(' ⭐️ ') ;
    this.displayTwo = this.us.getCars().join(' ⭐️ ');
  }
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
  userService = inject(UserService);
}


