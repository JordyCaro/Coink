import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss']
})
export class LoginInputComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
