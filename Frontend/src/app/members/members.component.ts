import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  members: any = [];
  editingId: number | null = null;
  constructor(private memberService: MemberService) {}
  formMember!: FormGroup;
  ngOnInit() {
    this.getAllMembers();
    this.formMember = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      registrationDate: new FormControl(''),
    });
  }

  getAllMembers() {
    this.memberService.getMember().subscribe((response) => {
      this.members = response;
    });
  }
  addMember() {
    const email = this.formMember.get('email')?.value;
    const name = this.formMember.get('name')?.value;
    const registrationDate = this.formMember.get('registrationDate')?.value;
    console.log(email, name, registrationDate);
    // Asegúrate de que la información y el userId estén presentes
    this.memberService
      .addMember(email, name, registrationDate)
      .subscribe((response) => {
        this.getAllMembers();
        this.formMember.reset();
      });
  }
  deleteMember(id: number) {
    this.memberService.deleteMember(id).subscribe((response) => {
      this.getAllMembers();
      this.formMember.reset();
    });
  }
  addInfoInForm(remember: any, id: number) {
    this.editingId = id;
    this.formMember.setValue({
      email: remember.email,
      name: remember.name,
      registrationDate: remember.registrationDate,
    });
  }
  editMember() {
    const email = this.formMember.get('email')?.value;
    const name = this.formMember.get('name')?.value;
    const registrationDate = this.formMember.get('registrationDate')?.value;
    const id = this.editingId;
    if(id==null){
      return console.log("ID no puede ser null");
    }
    return this.memberService.ediMember(id, name, email, registrationDate).subscribe((response)=>{
      this.getAllMembers();
      this.formMember.reset();
    })
  }
  
}
