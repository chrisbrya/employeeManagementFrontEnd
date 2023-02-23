import { HttpClient } from '@angular/common/http';
import { Injectable, ɵresetJitOptions } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from './customer';
import { Observable, map } from 'rxjs';
import { Dependent } from './dependent';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiServerUrl = environment.apiBaseUrl;
  customer!: Customer;
  //customerId: number = this.customer.id;

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiServerUrl}/api/getAllCustomers`);
  }

  public addCustomer(customer: Customer) {
    return this.http.post(`${this.apiServerUrl}/api/saveCustomer`, customer, {...Option, responseType: 'text'});
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiServerUrl}/api/updateCustomer`, customer);
  }

  public deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/deleteCustomer/${customerId}`);
  }

  public getDependentsByCustomerId(customerId: number): Observable<Dependent[]> {
    return this.http.get<GetResponseDependents>(`${this.apiServerUrl}/api/getDependent/${customerId}`).pipe(
      map(response => response._embedded.dependents)
    );
  }

  public getDependent(): Observable<Dependent[]> {
    return this.http.get<Dependent[]>(`${this.apiServerUrl}/api/getAllDependents`);
  }

  public findCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiServerUrl}/api/findCustomerById/${customerId}`);
  }

  public findCustomerByEmail(email: string): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/api/findCustomerByEmail/${email}`);
  }

    public loginUserFromRemote(customer: Customer): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/login", customer)
  }

}

interface GetResponseDependents {
    _embedded: {
      dependents: Dependent[];
    }
}




