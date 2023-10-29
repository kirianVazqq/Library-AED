import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AuthorsComponent } from '../authors/authors.component';
import { BooksComponent } from '../books/books.component';
import { MembersComponent } from '../members/members.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  { path: 'app-authors', component: AuthorsComponent },
  { path: 'app-books', component: BooksComponent },
  { path: 'app-members', component:MembersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
