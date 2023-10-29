import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  authors: any = [];
  editingId:number | null=null;
  constructor(private authorService: AuthorService) {}
  formAuthor!: FormGroup;
  ngOnInit() {
    this.getAllAuthors();
    this.formAuthor = new FormGroup({
      birthDate: new FormControl(''),
      nationality: new FormControl(''),
      name: new FormControl(''),
    });
  }
  getAllAuthors() {
    this.authorService.getAuthor().subscribe((response) => {
      this.authors = response;
    });
  }
  addAuthor() {
    const birthDate = this.formAuthor.get('birthDate')?.value;
    const nationality = this.formAuthor.get('nationality')?.value;
    const name = this.formAuthor.get('name')?.value;
    this.authorService
      .addAuthor({birthDate:birthDate,nationality:nationality,name: name})
      .subscribe((response) => {
        this.getAllAuthors();
        this.formAuthor.reset();
      });
  }
  deleteAuthor(id:number) {


    this.authorService
      .deleteAuthor(id)
      .subscribe((response) => {
        this.getAllAuthors();

      });
  }
  addInfoInForm(author:any, id:number){
this.editingId= id;
this.formAuthor.setValue({
  birthDate:author.birthDate,
  nationality:author.nationality,
  name:author.name,
})
  }

  editAuthor() {
    const id= this.editingId
    const birthDate = this.formAuthor.get('birthDate')?.value;
    const nationality = this.formAuthor.get('nationality')?.value;
    const name = this.formAuthor.get('name')?.value;
    if(id==null){
      return console.log("El id no puede ser null")
    }
    return this.authorService
    .editAuthor(id,birthDate,nationality,name)
    .subscribe((response) => {
      this.getAllAuthors();
      this.formAuthor.reset();
      console.log("birthdate", birthDate, "nationality", nationality, "name", name)
      });
  }
}
