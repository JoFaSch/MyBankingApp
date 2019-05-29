import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './Components/AdminView/home-view/home-view.component';
import { AddAccountComponent } from './Components/AdminView/add-account/add-account.component';
import { AddCustomerComponent } from './Components/AdminView/add-customer/add-customer.component';
import { CustomerViewComponent } from './Components/AdminView/customer-view/customer-view.component';
import { UserHomeViewComponent } from './Components/UserView/user-home-view/user-home-view.component';
import { TransferViewComponent } from './Components/AdminView/transfer-view/transfer-view.component';
import { SearchCustomerComponent } from './Components/AdminView/search-customer/search-customer.component';
import { CustomerOverviewComponent } from './Components/UserView/customer-overview/customer-overview.component';
import { UserTransferComponent } from './Components/UserView/user-transfer/user-transfer.component';
import { combineLatest } from 'rxjs';
import { ChooseComponentComponent } from './Components/choose-component/choose-component.component';
import { AccountViewComponent } from './Components/UserView/account-view/account-view.component';
import { FaqViewComponent } from './Components/UserView/EverythingElse/faq-view/faq-view.component';
import { ContactViewComponent } from './Components/UserView/EverythingElse/contact-view/contact-view.component';
import { MailboxViewComponent } from './Components/UserView/EverythingElse/mailbox-view/mailbox-view.component';
import { AtmFinderViewComponent } from './Components/UserView/EverythingElse/atm-finder-view/atm-finder-view.component';
import { ProductsAndInformationViewComponent } from './Components/UserView/EverythingElse/products-and-information-view/products-and-information-view.component';
import { RunningOrdersViewComponent } from './Components/UserView/EverythingElse/running-orders-view/running-orders-view.component';
import { StockMarketViewComponent } from './Components/UserView/EverythingElse/stock-market-view/stock-market-view.component';

const routes: Routes = [
  {   
      path: '',
      redirectTo: '/chooseView',
      pathMatch: 'full'
  },
  { 
      path: 'home', //maybe rename it adminHome
      component: HomeViewComponent
  },
  {
      path: 'chooseView',
      component: ChooseComponentComponent
  },
  {
      path: 'addAccount',
      component: AddAccountComponent
  },
  {
      path: 'addCustomer',
      component: AddCustomerComponent
  },
  {
      path: 'customerList',
      component: CustomerViewComponent
  },
  {
      path: 'transferAdmin',
      component: TransferViewComponent
  },
  {
      path: 'searchCustomer',
      component: SearchCustomerComponent
  },
  

  ////////////////////////////USER
  {
    path: 'customerOverview',
    component: CustomerOverviewComponent  
  },
  {
    path: 'userHome',
    component: UserHomeViewComponent
  },
  {
    path: 'userTransfer',
    component: UserTransferComponent
  },
  {
    path: 'showAccount',
    component: AccountViewComponent
  },
  {
    path: 'faq',
    component: FaqViewComponent
  },
  {
      path: 'contact',
      component: ContactViewComponent
  },
  {
    path: 'mailbox',
    component: MailboxViewComponent
  },
  {
    path: 'atmfinder',
    component: AtmFinderViewComponent
  },
  {
    path: 'productsAndInformation',
    component: ProductsAndInformationViewComponent
  },
  {
    path: 'runningOrders',
    component: RunningOrdersViewComponent
  },
  {
    path: 'stockMarket',
    component: StockMarketViewComponent
  },
  {
    path: '**',
    redirectTo: '/userHome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
