import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpringBootRestApiAngularSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [SpringBootRestApiAngularSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent, CustomerComponent, CustomerListComponent],
})
export class SpringBootRestApiAngularHomeModule {}
