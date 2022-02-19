import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Buffer} from "buffer";
import {ButtonsOnOff} from "./components/ButtonsOnOff";
import {Lamp} from "./components/Lamp";

function App() {
    let [pressed, setPressed] = useState(false)
    //console.log(pressed)

    const ButtonPressed = (name:boolean) => {
        setPressed(name)
        //console.log(14)

    }

    return (
        <div className="App">
            <header className="App-header">

                <Lamp pressed={pressed}/>

                <ButtonsOnOff ButtonPressed = {ButtonPressed} name={pressed}/>


            </header>
        </div>
    );
}

export default App;
