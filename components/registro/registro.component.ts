import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[UserService]
})
export class RegistroComponent implements OnInit {
  public user : User;
  constructor(private _userService: UserService,private router:Router) {
    this.user = new User('','','', '','', '',);
   }

  ngOnInit(): void {
  }
 
 public btnRegistro(){
    console.log(this.user);
    this._userService.register(this.user).subscribe(
      response =>{
        alert("Se registro correctamente");
        console.log(response);
      },
      error =>{
        console.log(error.message);
      },
    );
    
  }
}
