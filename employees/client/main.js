import React from 'react';
import ReactDOM from 'react-dom';

//actionable imports

import EmployeeList from './components/employee_list';

const App = () => {
  return (
    
    <EmployeeList />
  );
};

//After load, render to the DOM
Meteor.startup(() => {
ReactDOM.render(<App />, document.querySelector('.container'));

});
