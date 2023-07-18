package com.example.demo.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeRepo;
import com.example.demo.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	
	// This is the implementation class of our EmployeeService class. 
	
	@Autowired
	EmployeeRepo repository;

	@Override
	public boolean addEmployee(Employee employee) {
		return repository.save(employee).toString().equals(employee.toString());
	}

	@Override
	public boolean updateEmployee(Employee employee) {
		boolean deleteEmployee = deleteEmployee(employee.getId());
		if(deleteEmployee) {
			return addEmployee(employee);
		}
		return false;
	}

	@Override
	public boolean deleteEmployee(int id) {
		Employee user = checkEmployeePresent(id);
		if(user!=null) {
			repository.delete(user);
			if (repository.findById(id) == null) {
				return true;
			} else {
				return false;
			}
		}else {
			return false;
		}
	}

	@Override
	public List<Employee> getEmployee() {
		return repository.findAll();
	}

	@Override
	public Employee getEmployee(int id) {
		return checkEmployeePresent(id);
	}

	public Employee checkEmployeePresent(int id) {
		int uniqueNo=0;
		try {
			uniqueNo = Integer.parseInt(id+"");
		}
		catch (Exception e) {
			System.out.println("Error occured while parsing ... please enter integer value.");
		}
		Optional<Employee> employee = repository.findById(uniqueNo);
		if(employee.isEmpty()) {
			return null;
		}else {
			return employee.get();
		}
	}
	
}

