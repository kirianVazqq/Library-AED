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
import com.kirian.library.entity.models.Loan;
import com.kirian.library.entity.services.ILoanService;

@RestController
@CrossOrigin(origins="*")
public class LoanController {
	@Autowired
	ILoanService loanService;
	
	@GetMapping("/loans")
	public List<Loan> getAllUsers(){
		return loanService.getAll();
	}
	
	//PathVariable indica que un parametro del metodo 
	//debe ser enlazado, como en el caso del id
	@GetMapping("/loans/{id}")
	public Loan getOne(@PathVariable(value = "id")long id){
		return loanService.get(id);
	}
	
	@PostMapping("/loans")
	public void post(@RequestBody Loan loan){
		loanService.post(loan);
	}
	@PutMapping("/loans/{id}")
	public void put(@RequestBody Loan loan, @PathVariable(value = "id")long id){
		loanService.put(loan, id);
	}
	
	@DeleteMapping("/loans/{id}")
	public void delete(@PathVariable(value = "id")long id){
		loanService.delete(id);
	}
}