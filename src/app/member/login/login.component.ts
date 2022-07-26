import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  identifier = '';
  password = '';
  constructor(private cs:CommonService, private router:Router) { }

  login(){
    let logindata ={
        "identifier": this.identifier,
        "password": this.password
    }
    this.cs.login(logindata).subscribe(res =>{
      console.log(res.jwt);
      if(res.jwt){
        this.router.navigate(['/member/specials'])
      }
    });
  }

  ngOnInit(): void {
  }

}
