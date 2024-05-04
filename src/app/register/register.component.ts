import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;

  constructor(){
    this.registerForm=new FormGroup({
      Name: new FormControl('', Validators.required),
      User_Name: new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]),
      Confirm_Password:new FormControl('',Validators.required)
    }, { validators: this.passwordMatchValidator });
  }
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('Password')?.value;
    const confirmPassword = control.get('Confirm_Password')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  handleFormSubmit()
  {
 console.log(this.registerForm);
 
  }
}
