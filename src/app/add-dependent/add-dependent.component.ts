import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-dependent',
  templateUrl: './add-dependent.component.html',
  styleUrls: ['./add-dependent.component.css']
})
export class AddDependentComponent implements OnInit {

  constructor(private service: RegistrationService, private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

}
