import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { AdminService} from '../../components/service/admin.service';

import { Router } from '@angular/router';

import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any={};
  loginname : String;
  password : String;
  errorMessage:string;  
  name : string;  
  Wdate;
  annee : 0;
  constructor(private router:Router,private userService : AdminService,
    public toastr: ToastrService,private datePipe : DatePipe) { }    
  ngOnInit() {    
     this.userService.islogin = false;
     this.userService.admin = false;
     this.userService.suser = false;
     this.Wdate = this.transformDate(new Date());
     this.annee = (this.Wdate).toString().substring(0,4);
     localStorage.setItem('annee', this.annee.toString());
  }    
  login() {
    
    this.userService.login(this.loginname).subscribe(
      response =>{this.user = response;
      
       if (this.user.pwd == this.password)
       {
        this.name = this.user.nom;
        localStorage.setItem('name', this.name);
         this.userService.islogin = true;
        if (this.user.role  == "Admin")
         {
          this.userService.admin = true;
        this.router.navigate(['/admin']);
     
     
      }
      else
      {
        
        this.router.navigate(['/login']);
        
      }
       }
              else
              {
                this.toastr.warning( 'Mot de Passe  Incorrecte ')
               }

          },
          error => 
          
            this.toastr.warning( 'Login Incorrecte ')
         
          
          );
     
   
        
    
    }
   

    transformDate(date){
      return this.datePipe.transform(date, 'yyyy-MM-dd');
    }
    logout() {
     
      localStorage.removeItem('name');
      
  }
}
