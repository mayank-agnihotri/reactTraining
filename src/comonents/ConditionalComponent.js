import Counter from "./Counter";

export default function ConditionalComponent(){
    const display = false;

    // if(display){
    //     return (<div><Counter/></div>)
    // }else {
    //     return (<div><h3>Nothing to see</h3></div>)
    // }


    // let output;
    // if(display){
    //     output = <Counter/>
    // }else{
    //     output = <h3>Nothing to see here</h3>
    // }
    // return(
    //     <div>
    //         {output}
    //     </div>
    // )


    return(display?<Counter/> : <h3>Nothing to see</h3>)
}