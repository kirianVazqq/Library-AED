package com.kirian.library.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.kirian.library.entity.models.Member;
import com.kirian.library.entity.services.IMemberService;

@RestController
@CrossOrigin(origins="*")
public class MemberController {
	@Autowired
	IMemberService memberService;
	@GetMapping("/members")
	public List<Member> getAllUsers(){
		return memberService.getAll();
	}
	
	//PathVariable indica que un parametro del metodo 
	//debe ser enlazado, como en el caso del id
	@GetMapping("/members/{id}")
	public Member getOne(@PathVariable(value = "id")long id){
		return memberService.get(id);
	}
	
	@PostMapping("/members")
	public void post(@RequestBody Member member){
		memberService.post(member);
	}
	@PutMapping("/members/{id}")
	public void put(@RequestBody Member member, @PathVariable(value = "id")long id){
		memberService.put(member, id);
	}
	
	@DeleteMapping("/members/{id}")
	public void delete(@PathVariable(value = "id")long id){
		memberService.delete(id);
	}
}
