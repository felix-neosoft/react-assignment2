import React, { Component } from 'react';

class ListDetails extends Component {
    
    render() { 
        const employeeD = this.props;
        return ( 
            <div className="w-75 m-auto table-l">
                <table className="table table-list ">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Salary</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeD.employeeData.map((latest,index) =>(
                            <tr key={index}>
                                <td>{latest.id}</td>
                                <td>{latest.fname}</td>
                                <td>{latest.lname}</td>
                                <td>{latest.salary}</td>
                                <td>{latest.dept}</td>
                            </tr>
                     ))}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default ListDetails;