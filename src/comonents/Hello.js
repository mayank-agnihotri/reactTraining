// const Hello = ()=>{
//     return<h1>Hello World From Arrow Function</h1>
// }

// function Hello(){
//     return <h1>Hello World</h1>
// }

// export default Hello;



export default function Hello(){
    const name = "Mayank";
    const reverse = (name)=> {return name.split("").reverse().join("")}

    return <h1>Hello {reverse(name)}</h1>
}