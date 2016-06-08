import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 10;

const EmployeeList = (props) => {
  console.log(props.employees);
  return (
    <div>
    <div className="employee-list">
      {props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee} />)}
    </div>
    <button onClick={() => Meteor.subscribe('employees', 40) } className="custom-btn"> Load More </button>
    </div>
  )
};

export default createContainer(() => {
  //setup subs
Meteor.subscribe('employees', PER_PAGE);
  //then return some objects -> send to EmployeeList as props
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
