import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginServeService} from "../../serve/login-serve.service";
import {passwordValid, usernameValid} from "../../validator/validators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  private userCate = [];
  constructor(private fb: FormBuilder, private loginServeService: LoginServeService) {

  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      adminCate: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
    setTimeout( () => {
      this.userCate = [
        { value: 'jiaoshi', label: '教师' },
        { value: 'admin', label: '管理员' },
        { value: 'xuesheng', label: '学生' }
      ];
    })
  }

  _submitForm() {
    console.log(this.validateForm.controls)
    if(this.validateForm.valid){
      console.log(this.validateForm.value)
      this.loginServeService.login(this.validateForm.value, data => {
        console.log(data);
      });
    }
  }
}
