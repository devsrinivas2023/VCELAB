package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Employee;

public interface EmployeeRepo extends JpaRepository<Employee,Integer>{

	// This interface is used to interact with database like CRUD operations.
	// This interface has some pre-defined methods to interact.
}
