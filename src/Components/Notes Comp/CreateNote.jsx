import "./CreateNote.css"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import { NotesContext } from "../../utils/NotesHooks/NotesContext";
import { useState } from "react";

export function CreateNote() {
    const navigate = useNavigate();
    const {userNotes,setNotes} = useContext(NotesContext);
    const [title,SetTitle] = useState(() => {
     const savedTitle = localStorage.getItem("title");
     return savedTitle ? JSON.parse(savedTitle) : "";
    });
    const [Description,setDescription] = useState(() => {
     const savedDescription = localStorage.getItem("description");
     return savedDescription ? JSON.parse(savedDescription) : "";
    });
    const [isEmpty,setIsEmpty] = useState(false);

    useEffect(() => {
     localStorage.setItem("title",JSON.stringify(title));
    },[title])

    useEffect(() => {
     localStorage.setItem("description",JSON.stringify(Description));
    },[Description])

    // useEffect(() => {
    //  console.log(userNotes);
    // },[userNotes])
   
    return (
        <div className="CreateContainer">
            <div className="header">
                <h2 className="create-head">Create Your Note</h2>
                <button title="Add Note" className="add-button" onClick={() => {
                    if(!title || !Description) {
                        setIsEmpty(true);
                        return
                    }
                    setIsEmpty(false);

             const newNote = {
             id: userNotes.length + 1,
            title: title,
             description: Description
             };
            setNotes((currentState) => {
                return [...currentState, newNote];
            });
            setDescription("");
            SetTitle(""); 
            navigate("/");
            
            }}><img src = "/add-icon.png" ></img></button> 
                <button title="Cancel" onClick={() => {
                    navigate("/")
                }}><img src="/cross-icon.png"></img></button>
            </div>
            <div className="main-area">
            {isEmpty && (<div className="isempty-div"><p>You Cannot Create An Empty Note</p> 
            <button onClick={() => {
                setIsEmpty(false)
            }}>Dismiss</button></div>)}
              <input className="title-in" type="text" placeholder="Enter Your Title" value={title} 
              onChange={(e) => {
                  SetTitle(e.target.value)
              }}/>
              <textarea className="desc-in" type="text" placeholder="Enter Your Description" value={Description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}/>
            </div>
        </div>
    )
}