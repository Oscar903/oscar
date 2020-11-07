import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public user: User;
  constructor(private _userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
  }
  /*public btnLogin(){
    this._userService.signup(this.user).subscribe(
      response =>{
        this.router.navigate(['/paciente']);  
      },
      error =>{
        //mostrar un alert en la pagina
        console.log(error.message);
      },
    );
  }*/
  public btnLogin() {
        this.router.navigate(['/paciente']);
  }

}
