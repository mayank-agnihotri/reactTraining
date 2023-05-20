import { useState } from "react"
import axios from "axios"

export default function Employees(){

    const [name , setName] = useState()
    const [age , setAge] = useState()
    const [employees, setEmoployees] = useState([]);

    const saveEmployee = ()=>{
        console.log("name>>>",name);
        console.log("age>>>",age);
        axios({
            method: 'post',
            url: 'http://localhost:8080/employees',
            data: {
                name: name,
                age: age
            }
        }).then(res=>{

            axios({
                method: 'get',
                url: 'http://localhost:8080/employees'
            }).then(response=>{
                console.log(response.data._embedded.employees)
                setEmoployees(response.data._embedded.employees)
            })


        });
    }


    return(
        <div>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" onChange={(e)=>setAge(e.target.value)}/>
            <button onClick={saveEmployee}>Save</button>
            {employees.map((employee)=>{ return(<div>{employee.name} {employee.age} </div>)})}
        </div>
    )
}