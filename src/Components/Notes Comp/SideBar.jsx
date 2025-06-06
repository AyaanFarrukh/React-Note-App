import "./SideBar.css"
import { NotesContext,MarkedNotesContext } from "../../utils/NotesHooks/NotesContext"
import { useContext, useEffect,useRef, useState} from "react"
import { SideNotes } from "./SideNotes";
import { Route,Routes, useNavigate } from "react-router-dom";
import { CreateNote } from "./CreateNote";
import { MarkedNotes } from "./MarkedNotes";

export function SideBar() {
    const {userNotes,setNotes} = useContext(NotesContext);
    const {markedNotes,setMarkedNotes} = useContext(MarkedNotesContext);
    const titleRef = useRef(null);
    const [viewAll,setViewAll] = useState(true);
    const [viewMarked,setViewMarked] = useState(false);
    const navigate = useNavigate();
    
    return (
        <div className="main-box" style={{width: "100%"}}>
            <h1 className="head" ref={titleRef}>Your Notes</h1>
            <div className="buttons-box">
                <button onClick={() => {
                    setViewAll(true);
                    setViewMarked(false);
                }} style={{backgroundColor: viewAll ? "lightblue" : "white" }}>All</button>
                <button onClick={() => {
                    setViewAll(false);
                    setViewMarked(true);
                }} style={{backgroundColor: viewMarked ? "lightblue" : "white"}}>Marked</button>
            </div> 
        <aside>
          {viewAll && userNotes.map((currentNote,index) => {
                return <SideNotes Note={currentNote} all={viewAll} marked={viewMarked} 
             setViewAll = {setViewAll} setViewMarked={setViewMarked}/>
            })}

            {viewMarked && markedNotes.map((currentNote,index) => {
                return <MarkedNotes Note={currentNote} all = {viewAll} marked={viewMarked} 
             setViewAll = {setViewAll} setViewMarked={setViewMarked}/>
            })}
            {viewAll && 
            <div className="noteDiv createNoteDiv"><button onClick={() => navigate('/create-note')}>+</button></div>}
        </aside>
        </div>
    )
}