import React, { Component } from 'react';
import ListDetails from './ListDetails';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            employee: [
                {id:1,fname:'Felix',lname:'Mathew',salary:10000,dept:'front-end React'},
                {id:2,fname:'Rahul',lname:'Kenchi',salary:13000,dept:'front-end React'},
                {id:3,fname:'Gaurav',lname:'Patil',salary:15000,dept:'front-end React'},
                {id:4,fname:'Rahul',lname:'Ghosh',salary:17000,dept:'front-end React'},
                {id:5,fname:'Samiksha',lname:'Kad',salary:19000,dept:'front-end React'},
                {id:6,fname:'Samiksha',lname:'Gurav',salary:12000,dept:'front-end React'},
                {id:7,fname:'Vinayak',lname:'Chavan',salary:14000,dept:'front-end React'},
                {id:8,fname:'Neha',lname:'Deore',salary:16000,dept:'front-end React'},
                {id:9,fname:'Vinayak',lname:'Deulkar',salary:18000,dept:'front-end React'},
                {id:10,fname:'Prachi',lname:'Tawde',salary:20000,dept:'front-end React'},
                {id:11,fname:'Sushant',lname:'Kadam',salary:10000,dept:'front-end React'},
                {id:12,fname:'Ambika',lname:'Hadapad',salary:13000,dept:'front-end React'},
                {id:13,fname:'Saurabh',lname:'Sonar',salary:15000,dept:'front-end React'},
                {id:14,fname:'Sushant',lname:'Toraskar',salary:17000,dept:'front-end React'},
                {id:15,fname:'Sumit',lname:'Munot',salary:19000,dept:'front-end React'},
                {id:16,fname:'Akshay',lname:'Singhal',salary:12000,dept:'front-end React'},
                {id:17,fname:'Prachi',lname:'Naik',salary:11000,dept:'front-end React'},
                {id:18,fname:'Kiran',lname:'Misal',salary:14000,dept:'front-end React'},
                {id:19,fname:'Parth',lname:'Pichke',salary:16000,dept:'front-end React'},
                {id:20,fname:'Yogesh',lname:'Kadu',salary:18000,dept:'front-end React'}
            ]
         }
    }


    
    render() { 

       let employee = this.state.employee
        return ( 
            <div>
                    <ListDetails employeeData = {employee} />
            </div>
         )
    }
}
 
export default List;