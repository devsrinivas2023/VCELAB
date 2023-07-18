package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Employee {
	
	
	
	/* This is an Entity table class in mysql database . 
	   Spring Data Jpa automatically creates the table  in db . The fields in class become 
	   the attributes in table.
	   */

	@Id
	private int id;
	
	private String ename;
	
	private double sal;
	
	private String address1;
	
	private long mobile;

	public Employee() {
		super();
	}

	public Employee(int id, String ename, double sal, String address1, long mobile) {
		super();
		this.id = id;
		this.ename = ename;
		this.sal = sal;
		this.address1 = address1;
		this.mobile = mobile;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public double getSal() {
		return sal;
	}

	public void setSal(double sal) {
		this.sal = sal;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", ename=" + ename + ", sal=" + sal + ", address1=" + address1 + ", mobile="
				+ mobile + "]";
	}
	
}
