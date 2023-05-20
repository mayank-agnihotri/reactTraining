import logo from './logo.svg';
import './App.css';
import Hello from "./comonents/Hello";
import Profile from "./comonents/Profile";
import FunctionEvent from "./comonents/FunctionEvent";
import Counter from "./comonents/Counter";
import ConditionalComponent from "./comonents/ConditionalComponent";
import Product from "./comonents/Product";
import Form from "./comonents/Form";
import Employees from "./comonents/Employees";

function App() {
  return (
    <div className="App">
      {/*<Hello/>*/}
      {/*<Profile name="Mayank" lastname={"Agnihotri"}>*/}
      {/*    <h3>something</h3>*/}
      {/*</Profile>*/}
      {/*  <FunctionEvent/>*/}
      {/*  <Counter/>*/}
      {/*  <ConditionalComponent/>*/}
      {/*  <Product/>*/}
      {/*  <Form/>*/}
        <Employees/>
    </div>
  );
}

export default App;
