import "../Notes Comp/Header.css"
import {useNavigate} from "react-router-dom"
import { useState } from "react"

export function Header() {
    const navigate = useNavigate()
    const [showCreate,setShowCreate] = useState(false);
    
    function handleOnClick() {
        setShowCreate(true)
      }

    return <header>     
      <h1>Note Web App</h1>
      <button title = "Create Note" onClick={() => {
        handleOnClick();
        navigate("/create-note")
      }}>+</button>
    </header>
}