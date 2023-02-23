import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Dependent } from '../dependent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers!: Customer[];
  email!: string;
  public dependents: Dependent[] = [];
  dependent!: Dependent;
  message = '';
  customer!: Customer;
  currentUserEmail!: any;
  currentUserPassword!: string;

  constructor(private customerService: CustomerService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.currentUserEmail = sessionStorage.getItem('currentUserEmail');
    this.currentUserPassword = JSON.stringify(sessionStorage.getItem('currentUserPassword'));
    // alert(this.currentUserPassword);
    this.getCustomer(this.currentUserEmail);
    // this.getDependent();
   

    
  }

  public getCustomer(email: string): void {
    this.customerService.findCustomerByEmail(email).subscribe(
      (response: Customer) => {
        this.customer = response;
        // alert(JSON.stringify(this.customer));
        for (let i = 0; i < this.customer.dependent.length; i++){
          this.dependents.push(this.customer.dependent[i]);
        }
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }

  // public getDependent(): void {
  //   this.customerService.getDependent().subscribe({
  //     next: (data: Dependent[]) => {this.dependents = data; 
  //       // alert(JSON.stringify(data));
  //     },
        
  //       error: (error: any) => {
  //         console.log("Exception occured");
  //         this.message = "User has no dependents";
  //       }
  //   });
  // }

  public getDependentByCustomerId(customerId: number): void {
   this.customerService.getDependentsByCustomerId(customerId).subscribe({ 
      
        next: (data: Dependent[]) => {this.dependents = data; 
        // alert(JSON.stringify(data));
      },
        
        error: (error: any) => {
          console.log("Exception occured");
          this.message = "User has no dependents";
        }
      });
  }

 

}
