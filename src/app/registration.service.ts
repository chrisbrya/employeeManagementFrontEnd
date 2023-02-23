import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  

  constructor(private http: HttpClient) { }

  public loginUserFromRemote(customer: Customer): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/login", customer)
  }

  public registerCustomerFromRemote(customer: Customer): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/saveCustomer", customer);
  }
}
