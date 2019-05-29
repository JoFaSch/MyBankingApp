import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountViewComponent } from './Components/UserView/account-view/account-view.component';

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { HomeViewComponent } from './Components/AdminView/home-view/home-view.component';
import { NavBarComponent } from './Components/AdminView/nav-bar/nav-bar.component';
import { AddAccountComponent } from './Components/AdminView/add-account/add-account.component';
import { AddCustomerComponent } from './Components/AdminView/add-customer/add-customer.component';
import { CustomerViewComponent } from './Components/AdminView/customer-view/customer-view.component';
import { UserNavBarComponent } from './Components/UserView/user-nav-bar/user-nav-bar.component';
import { UserHomeViewComponent } from './Components/UserView/user-home-view/user-home-view.component';
import { TransferViewComponent } from './Components/AdminView/transfer-view/transfer-view.component';
import { UserNavBarVerticalComponent } from './Components/UserView/user-nav-bar-vertical/user-nav-bar-vertical.component';
import { SearchCustomerComponent } from './Components/AdminView/search-customer/search-customer.component';
import { UserLoginComponent } from './Components/UserView/user-login/user-login.component';
import { CustomerOverviewComponent } from './Components/UserView/customer-overview/customer-overview.component';
import { UserTransferComponent } from './Components/UserView/user-transfer/user-transfer.component';
import { ChooseComponentComponent } from './Components/choose-component/choose-component.component';
import { ValidationComponent } from './Components/UserView/validation/validation.component';
import { ContactViewComponent } from './Components/UserView/EverythingElse/contact-view/contact-view.component';
import { FaqViewComponent } from './Components/UserView/EverythingElse/faq-view/faq-view.component';
import { MailboxViewComponent } from './Components/UserView/EverythingElse/mailbox-view/mailbox-view.component';
import { AtmFinderViewComponent } from './Components/UserView/EverythingElse/atm-finder-view/atm-finder-view.component';
import { ProductsAndInformationViewComponent } from './Components/UserView/EverythingElse/products-and-information-view/products-and-information-view.component';
import { RunningOrdersViewComponent } from './Components/UserView/EverythingElse/running-orders-view/running-orders-view.component';
import { StockMarketViewComponent } from './Components/UserView/EverythingElse/stock-market-view/stock-market-view.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountViewComponent,
    HomeViewComponent,
    NavBarComponent,
    AddAccountComponent,
    AddCustomerComponent,
    CustomerViewComponent,
    UserNavBarComponent,
    UserHomeViewComponent,
    TransferViewComponent,
    UserNavBarVerticalComponent,
    SearchCustomerComponent,
    UserLoginComponent,
    CustomerOverviewComponent,
    UserTransferComponent,
    ChooseComponentComponent,
    ValidationComponent,
    ContactViewComponent,
    FaqViewComponent,
    MailboxViewComponent,
    AtmFinderViewComponent,
    ProductsAndInformationViewComponent,
    RunningOrdersViewComponent,
    StockMarketViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
