import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'app/service/customer.service';
import { Customer } from 'app/service/customer.model';

@Component({
  selector: 'jhi-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  constructor(private httpClientService: CustomerService, private toastr: ToastrService) {}

  ngOnInit() {
    this.httpClientService.customerList();
  }

  populateForm(customer: Customer) {
    this.httpClientService.formData = Object.assign({}, customer);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.httpClientService.deleteCustomer(id).subscribe(res => {
        this.toastr.warning('The customer has been deleted successfully', 'Customer. Register');
        this.httpClientService.customerList();
      });
    }
  }
}
