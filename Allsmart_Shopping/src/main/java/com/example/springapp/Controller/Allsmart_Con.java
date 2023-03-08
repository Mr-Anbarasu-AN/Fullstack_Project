package com.example.springapp.Controller;


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

import com.example.springapp.Model.Allsmart_Mod;
import com.example.springapp.Service.Allsmart_Ser;



@RestController
@CrossOrigin
public class Allsmart_Con {


	@Autowired
	Allsmart_Ser alService;
	@PostMapping("/addDetails")
	public Allsmart_Mod addinfo(@RequestBody Allsmart_Mod st) {
		return alService.saveDetails(st);
	}
	
	@GetMapping("/showDetails")
	public List<Allsmart_Mod> fetchDetails(){
		return alService.getDetails();
	}
	
	@PutMapping("/updateDetails")
	public Allsmart_Mod updateInfo(@RequestBody Allsmart_Mod st1) {
		return alService.updateDetails(st1);
	}
	
	@DeleteMapping("/deleteDetails/{id}")
	public String deleteInfo(@PathVariable("id") int id) {
		alService.deleteDetails(id);

		return "Details is Deleted Successfully";
		//return stuService.getDetails();
		
	}
	//sorting
	@GetMapping("/sort/{field}")
	public List<Allsmart_Mod> getWithSort(@PathVariable String field) {
		return alService.getSorted(field);
	}

	
	// pagination
	@GetMapping("/page/{offset}/{pageSize}")
	public List<Allsmart_Mod> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		return alService.getWithPagination(offset, pageSize);
	}
	
	
	
}