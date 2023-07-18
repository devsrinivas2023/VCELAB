package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;

@RestController
public class Controller {
	
	//Handles the http requests ...

	@Autowired
	EmployeeService userService;

	@PostMapping("/addEmployee")
	public ResponseEntity<Boolean> addEmployee(@RequestBody Employee employee) {
		boolean addEmployee = userService.addEmployee(employee);
		if (addEmployee) {
			return new ResponseEntity<Boolean>(addEmployee, HttpStatus.OK);
		} else {
			return new ResponseEntity<Boolean>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping("/getEmployee/{id}")
	public ResponseEntity<Object> getUser(@PathVariable String id) {
		try {
			int parseInt = Integer.parseInt(id);
			Employee employee = userService.getEmployee(parseInt);
			return new ResponseEntity<>(employee, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Id should be integer", HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/getEmployee")
	public ResponseEntity<Object> getUsers() {
		return new ResponseEntity<>(userService.getEmployee(), HttpStatus.OK);
	}

	@DeleteMapping("/deleteEmployee/{id}")
	public ResponseEntity<Object> deleteUser(@PathVariable String id) {
		try {
			int parseInt = Integer.parseInt(id);
			boolean deleteEmployee = userService.deleteEmployee(parseInt);
			return new ResponseEntity<>(deleteEmployee, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>("Error occured please enter valid details.", HttpStatus.BAD_REQUEST);
		}
	}

}
