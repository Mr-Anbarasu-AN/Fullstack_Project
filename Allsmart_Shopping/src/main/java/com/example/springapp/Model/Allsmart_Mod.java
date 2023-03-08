package com.example.springapp.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Allsmart_Mod {
	@Id
	private int id;
	private String name;
	private String brand;
	private int quantity;
	private String category;
	private float price;
	private float rating;
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	
	
	
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	
	
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	
	
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	
	
	public Allsmart_Mod(int id, String name,String brand,int quantity,String category, float price, float rating) {
		super();
		this.id = id;
		this.name = name;
		this.brand = brand;
		this.quantity = quantity;
		this.category = category;
		this.price = price;
		this.rating = rating;
	}
	
	
	
	public Allsmart_Mod() {
		
	}
	
	
	public String toString() {
		return "id="+id+"name="+name+"brand="+brand+"quantity="+quantity+
				"category="+category+"price="+price+"rating="+rating;
	}
	
	
	
	
}
