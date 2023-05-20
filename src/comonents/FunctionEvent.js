export default function FunctionEvent(){
    function handleClick(){
        console.log("button is clicked");
    }
    return <div>
        Functional Component
        <button onClick={handleClick}>Click Me</button>
    </div>
}