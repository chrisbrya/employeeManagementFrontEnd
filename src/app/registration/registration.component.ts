import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  customer: Customer = new Customer();
  message = '';

  constructor(private service: RegistrationService, private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  

  registerCustomer() {
    this.customerService.addCustomer(this.customer).subscribe({
      next: (data: any) => console.log("Response received"),
      error: (error: any) => {
        console.log("Exception occured");
        this.message = "User with that email already exists";
      },
      complete: () => this.router.navigate([''])
    })
    
  //   .subscribe(
  //     data => {
  //       console.log(data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
  }

}
