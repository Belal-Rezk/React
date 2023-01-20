import React , {useState , useRef} from "react"
import Header from './components/Header' ;
import Main from "./components/Main" ;
import Sidebar from "./components/Sidebar" ;
import './index.css';

export default function App() {
  const date = new Date()
  const [word , setWord] = React.useState("Eat")
  function handleClick() {
    setWord ("Drink")
  }
  return (
    <div className='app'>
      <Header
       message1 = {date.toLocaleTimeString()} 
       message2 = {word + " at BR restaurant"}
       onclickbutton = {handleClick}
      />
      <div className="part">
        <Main username="mack" num={5} />
        <Sidebar />
      </div>
    </div>
  )
}

// export default App;
