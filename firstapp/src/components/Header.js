const Header =   props => {
    return (
   <header>
    <h1>{props.message1}</h1>
    <h2>{props.message2}</h2>
    <button onClick={props.onclickbutton}>click here</button>
    </header>
    )
}
export default Header ;