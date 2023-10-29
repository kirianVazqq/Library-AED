import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { BooksComponent } from '../books/books.component';
import { AuthorsComponent } from '../authors/authors.component';
import { MembersComponent } from '../members/members.component';
import { LoansComponent } from '../loans/loans.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
    
    
  ],
  declarations: [HomePage, BooksComponent, AuthorsComponent, MembersComponent, LoansComponent]
})
export class HomePageModule {}
