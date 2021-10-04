import React, { Component } from 'react';

const regForEId = RegExp('^[A-Z]{1}-[0-9]{6}$');
const regForName = RegExp('^[a-zA-Z]{2,20}$');
const regForEmail=RegExp('^[a-zA-Z]+@[a-zA-Z]+.com$');
const regForNumber = RegExp('^[6-9][0-9]{9}$');
const regForAge = RegExp('^[0-9]{1,2}$');
const regForDate = RegExp('^(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|[1][0-2])/[0-9]{4}$');
const regForPassword = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})");
const regForAddress = RegExp('^[a-zA-Z0-9,-]{5,50}$');
const regForZip = RegExp('^[0-9]{6}$');
const regForExp = RegExp('^[0-9]{1,2}$')
const regForSalary = RegExp('^[0-9]{3,8}$')



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emp_id:"",
            f_name:"",
            m_name:"",
            l_name:"",
            gender:"",
            e_age:"",
            martial:"",
            d_birth:"",
            e_email:"",
            e_password:"",
            confirm_password:"",
            mobile:"",
            address:"",
            district:"",
            zipcode:"",
            state:"",
            apointment:"",
            experience:"",
            dept:"",
            salary:"",
            errors:{empid:"",fname:"",mname:"",lname:"",gender:"Gender must be selected",martial:"Martial Status must be selected"
            ,d_birth:"",age:"",email:"",password:"",confirmPassword:"",mobile:"",address:"",district:"",zipcode:"",state:""
            ,appointdate:"",experience:"",dept:"",salary:""}
         }
    }

    handler=(event)=>{
        const {name,value}=event.target
        let error = this.state.errors
        switch(name){
            case 'emp_id':
                error.empid=regForEId.test(value)?'':'Employee Id is invalid.'
                break
            case 'f_name':
                error.fname=regForName.test(value)?'':'First Name should be atleast 2-20 characters.'
                console.log()
                break
            case 'm_name':
                error.mname=regForName.test(value)?'':'Middle Name should be atleast 2-20 characters.'
                break
            case 'l_name':
                error.lname=regForName.test(value)?'':'Last Name should be atleast 2-20 characters.'
                break
            case 'gender':
                error.gender=value.length!==0?'':'Gender must be selected.'
                break
            case 'e_age':
                error.age = regForAge.test(value)?'':'Enter correct age'
                break
            case 'martial':
                error.martial= value==='Select'?'Martial Status must be selected.':''
                break
            case 'd_birth':
                error.d_birth = regForDate.test(value)?'':'Birth Date is incorrect.'
                break
            case 'e_email':
                error.email=regForEmail.test(value)?'':'Email is not valid.'
                break
            case 'e_password':
                error.password=regForPassword.test(value)?'':'Enter Strong Password of atleast 8 Characters.'
                break
            case 'confirm_password':
                error.confirmPassword = this.state.e_password===value?'':'Passowrd does not match.'
                break
            case 'mobile':
                error.mobile = regForNumber.test(value)?'':'Mobile Number is incorrect.'
                break
            case 'address':
                error.address = regForAddress.test(value)?'':'Address must be atleat 2 Characters.'
                break
            case 'district':
                error.district=regForName.test(value)?'':'District must be aleast 2 Characters.'
                break
            case 'zipcode':
                error.zipcode = regForZip.test(value)?'':'Zipcode must of 6 Digits.'
                break
            case 'state':
                error.state = regForName.test(value)?'':'Stare must be atleast 2 Characters.'
                break
            case 'appointdate':
                error.appointdate = regForDate.test(value)?'':'Date must be in Correct Format "DD/MM/YYYY".'
                break
            case 'experience':
                error.experience = regForExp.test(value)?'':'Experience must be atleast 1-99 digit.'
                break
            case 'dept':
                error.dept = regForName.test(value)?'':'Department must at least 2 Characters.'
                break
            case 'salary':
                error.salary = regForSalary.test(value)?'':'Salary must be correct Format.'
                break
            default:
        }
        this.setState({errors:error,[name]:value},()=>{
            console.log(error)
        })
    }


    formSubmit=(event)=>{
        event.preventDefault();
        if(this.validate(this.state.errors)){
            alert('Form Submitted!')
        }
        else{
            alert('Form Rejected')
        }
    }

    validate=(errors)=>{
        let valid = true;
        for(let value of Object.values(errors)){
            if(value.length>0){
                valid=false
            }
            console.log(value.length)
        }
        console.log(valid);
        return valid;
    }
    render() { 
        return ( 
            <div className="w-50  m-auto">
                <form onSubmit={this.formSubmit}>
                <div className="m-3  ">
                    <label className="form-label">Employee Id</label>
                    <input type="text" className="form-control" name="emp_id" onChange={this.handler}  aria-describedby="empid" />
                    <div id="empid" className="form-text text-danger">{this.state.errors.empid}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" name="f_name" onChange={this.handler} aria-describedby="fname" />
                    <div id="fname" className="form-text text-danger">{this.state.errors.fname}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Middle Name</label>
                    <input type="text" className="form-control" name="m_name" onChange={this.handler} aria-describedby="mname" />
                    <div id="mname" className="form-text text-danger">{this.state.errors.mname}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="l_name" onChange={this.handler} aria-describedby="lname" />
                    <div id="lname" className="form-text text-danger">{this.state.errors.lname}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Gender</label><br/>
                    <div  className="form-check form-check-inline">
                        <input  className="form-check-input" type="radio" name="gender" onClick={this.handler} value="Male"/>
                        <label  className="form-check-label">Male</label>
                    </div>
                    <div  className="form-check form-check-inline">
                        <input  className="form-check-input" type="radio" name="gender" onClick={this.handler} value="Female"/>
                        <label  className="form-check-label">Female</label>
                    </div>
                    <div id="emailHelp" className="form-text text-danger">{this.state.errors.gender}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Age</label>
                    <input type="text" className="form-control" name="e_age" onChange={this.handler} aria-describedby="eage" />
                    <div id="eage" className="form-text text-danger">{this.state.errors.age}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Martial Status</label>
                    <select name="martial" onChange={this.handler} className="form-select">
                        <option value="Select">Select </option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                    </select>
                    <div id="emailHelp" className="form-text text-danger">{this.state.errors.martial}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Date of Birth</label>
                    <input type="text" className="form-control" name="d_birth" onChange={this.handler} aria-describedby="dbirth" />
                    <div id="dbirth" className="form-text text-danger">{this.state.errors.d_birth}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" name="e_email" onChange={this.handler} aria-describedby="email" />
                    <div id="email" className="form-text text-danger">{this.state.errors.email}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Password</label>
                    <input type="text" className="form-control" name="e_password" onChange={this.handler} aria-describedby="password" />
                    <div id="password" className="form-text text-danger">{this.state.errors.password}</div>
                </div>

                <div className="m-3  ">
                    <label    className="form-label">Confirm Password</label>
                    <input type="text" className="form-control"name="confirm_password" onChange={this.handler} aria-describedby="confirmpassword" />
                    <div id="confirmpassword" className="form-text text-danger">{this.state.errors.confirmPassword}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Mobile</label>
                    <input type="text" className="form-control" name="mobile" onChange={this.handler} aria-describedby="mobile" />
                    <div id="mobile" className="form-text text-danger">{this.state.errors.mobile}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" onChange={this.handler} aria-describedby="eaddress" />
                    <div id="eaddress" className="form-text text-danger">{this.state.errors.address}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">District</label>
                    <input type="text" className="form-control" name="district" onChange={this.handler} aria-describedby="district" />
                    <div id="district" className="form-text text-danger">{this.state.errors.district}</div>
                </div>

                <div className="m-3  ">
                    <label    className="form-label">Zip Code</label>
                    <input type="text" className="form-control" name="zipcode" onChange={this.handler} aria-describedby="zipcode" />
                    <div id="zipcode" className="form-text text-danger">{this.state.errors.zipcode}</div>
                </div>

                <div className="m-3  ">
                    <label    className="form-label">State</label>
                    <input type="text" className="form-control" name="state" onChange={this.handler} aria-describedby="state" />
                    <div id="state" className="form-text text-danger">{this.state.errors.state}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Appointment Date</label>
                    <input type="text" className="form-control" name="appointdate" onChange={this.handler} aria-describedby="appointdate" />
                    <div id="appointdate" className="form-text text-danger">{this.state.errors.appointdate}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Experience</label>
                    <input type="text" className="form-control" name="experience" onChange={this.handler} aria-describedby="experience" />
                    <div id="experience" className="form-text text-danger">{this.state.errors.experience}</div>
                </div>

                <div className="m-3  ">
                    <label className="form-label">Department</label>
                    <input type="text" className="form-control" name="dept" onChange={this.handler} aria-describedby="dept" />
                    <div id="dept" className="form-text text-danger">{this.state.errors.dept}</div>
                </div>

                <div className="m-3  ">
                    <label    className="form-label">Salary</label>
                    <input type="text" className="form-control" name="salary" onChange={this.handler} aria-describedby="salary" />
                    <div id="salary" className="form-text text-danger">{this.state.errors.salary}</div>
                </div>

                

                

                <button type="submit"  className="btn btn-primary">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Form;