package com.example.demo.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Employee;

@Service
public interface EmployeeService {

	// This is a service class that means the class objects is controlled by Spring
	// IOC .

	// In this class we define some methods that are used by other classes to
	// interact with DB.

	public boolean addEmployee(Employee employee);

	public boolean updateEmployee(Employee employee);

	public boolean deleteEmployee(int  id);

	List<Employee> getEmployee();

	Employee getEmployee(int id);
}
