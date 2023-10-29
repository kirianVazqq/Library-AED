import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss'],
})
export class LoansComponent implements OnInit {
  loans: any = [];
  editingId:number | null=null;
  formLoans!: FormGroup;
  constructor(private loanService: LoanService) {}

  ngOnInit() {
    this.getAllLoans();
    this.formLoans = new FormGroup({
      returnDate: new FormControl(''),
      status: new FormControl(''),
      bookId: new FormControl(''),
      loanDate: new FormControl(''),
      memberId: new FormControl(''),
    });
  }

  getAllLoans() {
    this.loanService.getLoan().subscribe((response) => {
      this.loans = response;
    });
  }
  addLoan(){
    const returnDate= this.formLoans.get("returnDate")?.value;
    const status= this.formLoans.get("status")?.value;
    const bookId= this.formLoans.get("bookId")?.value;
    const loanDate= this.formLoans.get("loanDate")?.value;
    const memberId= this.formLoans.get("memberId")?.value;
    this.loanService.addLoan(returnDate,status,bookId,loanDate,memberId).subscribe((response)=>{
      this.getAllLoans();
      this.formLoans.reset();
    })
  }
  deleteLoan(id:number){
 
    this.loanService.deleteLoan(id).subscribe((response)=>{
      this.getAllLoans();
  
    })
  };
  addInfoInForm(loan:any, id:number){
    this.editingId= id;
    this.formLoans.setValue({
      returnDate:loan.returnDate,
      status:loan.status,
      bookId:loan.bookId,
      loanDate: loan.loanDate,
      memberId:loan.memberId
    })
 
  }
  editLoan(){
 const id= this.editingId;
    const returnDate= this.formLoans.get("returnDate")?.value;
    const status= this.formLoans.get("status")?.value;
    const bookId= this.formLoans.get("bookId")?.value;
    const loanDate= this.formLoans.get("loanDate")?.value;
    const memberId= this.formLoans.get("memberId")?.value;
    if(id==null){
      return console.log("El id no puede ser null ")
    }
     return this.loanService.editLoan(id,returnDate,status,bookId,loanDate,memberId).subscribe((response)=>{
      this.getAllLoans();
      this.formLoans.reset();
    })
  }
}
