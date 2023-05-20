import { useState } from "react"

export default function Form(){

    const [firstname , setFirstName] = useState();
    const [lastname , setLastName] = useState();
    const [gender , setGender] = useState();
    const [hobbies , setHobbies] = useState([]);
    const [city , setCity] = useState();

    const submitData = ()=>{
        console.log("firstname::",firstname);
        console.log("lastname::",lastname);
        console.log("gender::",gender);
        console.log("hobbies::",hobbies);
        console.log("city::",city);
    }

    const handleCheck =(event) =>{
        console.log(event.target.checked)
        console.log(event.target.value)
        let updatedList = [...hobbies]
        if(event.target.checked){
            updatedList = [...hobbies,event.target.value];
        }else{
            console.log(hobbies.indexOf(event.target.value));
            updatedList.splice(hobbies.indexOf(event.target.value),1);
        }
        setHobbies(updatedList);
    }


    return(
        <div>
            <br/>
            <br/>
            <table>

                <tr>
                    <td>Firstname::</td>
                    <td><input type="text" onChange={(e)=>setFirstName(e.target.value)}/></td></tr>
                <tr>
                    <td>Lastname::</td>
                    <td><input type="text" onChange={(e)=>setLastName(e.target.value)}/></td></tr>
                <tr>
                    <td>Gender::</td>
                    <td>
                        Male<input onClick={()=>setGender("Male")} name="gender" type="radio"/>
                        Female<input onClick={()=>setGender("Female")} name="gender" type="radio"/></td>
                </tr>
                <tr>
                    <td>Hobbies::</td>
                    <td>
                        Swimming<input onClick={(e)=>handleCheck(e)}  value="Swimming" type="checkbox"/>
                        Jogging<input onClick={(e)=>handleCheck(e)} value="Jogging" type="checkbox"/>
                        Dancing<input onClick={(e)=>handleCheck(e)} value="Dancing" type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td>City::</td>
                    <td>
                        <select onChange={(e)=>setCity(e.target.value)}>
                            <option value="Delhi">Delhi</option>
                            <option value="Banglore">Banglore</option>
                            <option value="Gurgaon">Gurgaon</option>
                            <option value="Noida">Noida</option>
                        </select>
                    </td>
                </tr>
                <tr><td><button onClick={submitData}>Submit</button></td></tr>
            </table>
        </div>
    )
}