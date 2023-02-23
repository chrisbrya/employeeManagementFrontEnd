import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer: Customer = new Customer();
  message = '';

  constructor(private service: RegistrationService, private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loginUser();
    this.setSession();
  }

  loginUser(){
      this.service.loginUserFromRemote(this.customer)
      .subscribe({
        next: (data: any) => {console.log("Response received");
        this.customer = data;
        // alert(JSON.stringify(this.customer));
      },
        
        error: (error: any) => {
          console.log("Exception occured");
          this.message = "Bad credentials, please enter a valid email address and password";
        },
        complete: () => this.router.navigate(['/customer'])
      })
      //   data => {
      //     console.log("Response received");
      //     this.router.navigate(['/customer']);
      //   },
      //   error => {
      //     console.log("Exception occured");
      //     this.message=("Bad credentials, please enter valid email address and password");
      //   }
      // );
  }

  gotoregistration(){
    this.router.navigate(['/registration']);
  }

  setSession() {
    sessionStorage.setItem('currentUserEmail', this.customer.email);
    sessionStorage.getItem('currentUserEmail');
    // alert(JSON.stringify(sessionStorage.getItem('currentUserEmail')));
    sessionStorage.setItem('currentUserPassword', this.customer.password);
    sessionStorage.getItem('currentUserPassword');
    // alert(JSON.stringify(sessionStorage.getItem('currentUserPassword')));
    
      
  }
  
  

}
