import React, { useEffect, useState } from "react"
import { SideBar } from "./Components/Notes Comp/SideBar";
import { MainContent } from "./Components/Notes Comp/MainContent";
import "../src/NotesApp.css"
import { Header } from "./Components/Notes Comp/Header";
import { NotesContext } from "./utils/NotesHooks/NotesContext";
import { selectNoteContext } from "./utils/NotesHooks/NotesContext";
import { useContext } from "react";
import { Routes,Route } from "react-router-dom";
import { CreateNote } from "./Components/Notes Comp/CreateNote";
import { MarkedNotesContext } from "./utils/NotesHooks/NotesContext"; 

function NotesApp() {
   let NoteContextData = useContext(NotesContext);
   let selectNoteData = useContext(selectNoteContext);
   let markedNotesData = useContext(MarkedNotesContext)
   const [Notes,setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("userNotes");
    return savedNotes ? JSON.parse(savedNotes) : NoteContextData
   });
   const [selectedNote,setSelectedNote] = useState(() => {
    const savedSelectedNote = localStorage.getItem("currentNote");
    return savedSelectedNote ? JSON.parse(savedSelectedNote) : selectNoteData
   });
   const [markedNotes,setMarkedNotes] = useState(() => {
    const savedMarkedNotes = localStorage.getItem("markedNotes");
    return savedMarkedNotes ? JSON.parse(savedMarkedNotes) : markedNotesData
   });

   useEffect(() => {
    localStorage.setItem("userNotes",JSON.stringify(Notes));
   },[Notes])

   useEffect(() => {
     localStorage.setItem("markedNotes",JSON.stringify(markedNotes));
   },[markedNotes])

   useEffect(() => {
     localStorage.setItem("currentNote",JSON.stringify(selectedNote));
   },[selectedNote])

 return (
   <NotesContext.Provider value={{userNotes : Notes, setNotes}}>
    <>
    <selectNoteContext.Provider value={{currentNote: selectedNote,setSelectedNote}}>
    <MarkedNotesContext.Provider value={{markedNotes: markedNotes,setMarkedNotes}}>
    <Routes>
    <Route path="/" element = { <><Header /><div className="Container">
      <SideBar /></div></>} />
      <Route path="/main-notes" element = {<><Header /><MainContent /></>} />
      <Route path="/create-note" element = {<><Header /><CreateNote /></>} />
    </Routes>
    </MarkedNotesContext.Provider>
    </selectNoteContext.Provider>
    </>
    </NotesContext.Provider>
 )
}

export default NotesApp;