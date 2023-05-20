// import { useState } from "react";

export default function Profile(props){


    // return <h1>Name: {props.name}</h1>
    // return <h1>{props.children}  Name: {props.name} {props.lastname}  </h1>

    // const [name,setName] = useState()
    // setName("Mayank")
    // return <h1> Name: {name} </h1>


    const {name,lastname} = props
    return <h1>{props.children}  Name: {name} {lastname}  </h1>


}