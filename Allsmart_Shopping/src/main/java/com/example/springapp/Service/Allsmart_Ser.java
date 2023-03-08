package com.example.springapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.springapp.Model.Allsmart_Mod;
import com.example.springapp.Repositry.Allsmart_Repo;


@Service
public class Allsmart_Ser {
	@Autowired
	Allsmart_Repo stRepo;
	
	public Allsmart_Mod saveDetails(Allsmart_Mod e)
	{
		return stRepo.save(e);
	}
	
	public List<Allsmart_Mod> getDetails(){
		return stRepo.findAll();
	}
	
	public Allsmart_Mod updateDetails(Allsmart_Mod e1)
	{
		return stRepo.saveAndFlush(e1);
	}
	
	public void deleteDetails(int Id)
	{
		stRepo.deleteById(Id);
	}
	
	public List<Allsmart_Mod> getSorted(String field) {
		return stRepo.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	
	public List<Allsmart_Mod> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<Allsmart_Mod> page =stRepo.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}


	
}