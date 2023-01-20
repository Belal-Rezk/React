import { useRef, useState } from "react";

const Sidebar =  props => {
    const asidestyle={
     background : "azure",
     width : "calc(30% - 10px)",
     marginLeft : "10px",
     padding : "50px"
    }
    const [form , setForm] = useState({
        first : "Belal",
        last : "Rezk",
        email : "333lolododo@gmail.com"
     })
     const inputel = useRef(null)
     const onbuttonclick = ()=> {
        inputel.current.focus()
     }
    return (
        <aside style={asidestyle}>
            <label>
                First-Name : 
                <input ref = {inputel}
                value={form.first} 
                onChange = {e=>{setForm({...form,first:e.target.value})}}
                />
            </label>     
            <br/> 
            <label>
                Last-Name : 
                <input value={form.last} 
                onChange = {e=>{setForm({...form,last:e.target.value})}}/>
            </label>   
            <br/>       
                <label>
                Email : 
                <input value={form.email} 
                onChange = {e=>{setForm({...form,email:e.target.value})}}/>
            </label>
            <p>
               First : {form.first}{" "}
               <br/>
               Last :  {form.last}{" "}
                <br/>
                Email : {form.email}
            </p>
            <button onClick={onbuttonclick}>focus the First-Name input</button>
        </aside>
    )
}
export default Sidebar ; 