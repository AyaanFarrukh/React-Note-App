import { CreateNote } from "./CreateNote"
import "./MainContent.css"
import {Route,Routes} from "react-router-dom"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { MarkedNotesContext, NotesContext, selectNoteContext } from "../../utils/NotesHooks/NotesContext"
import { useNavigate } from "react-router-dom"

export function MainContent() {
  const {currentNote,setSelectedNote} = useContext(selectNoteContext);
  const {userNotes,setNotes} = useContext(NotesContext);
  const {markedNotes,setMarkedNotes} = useContext(MarkedNotesContext);
  const [isEdit,SetEdit] = useState(false);
  const [title,setTitle] = useState(currentNote.title)
  const [description,setDescription] = useState(currentNote.description)

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("currentTitle",JSON.stringify(title));
   },[title])

   useEffect(() => {
    localStorage.setItem("currentDesc",JSON.stringify(description));
   },[description])

    return (
      <main className="main-notes">
        <div className="controls-box">
        <button className="back-btn" onClick={() => {
          navigate("/");
          SetEdit(false);
        }}><img src={process.env.PUBLIC_URL + '/back-icon.png'}></img></button>
         
          {isEdit || currentNote.setShow ? (<button className="editnote-btn" onClick={() => {
            setNotes((currentNotes) => {
              return currentNotes.map((note,i) => {
                if(note.id === currentNote.id) {
                  return ({
                    ...note,
                    title: title,
                    description: description,
                    setShow : false
                  })
                } else {
                  return note
                }
              })
            })
            setSelectedNote((selected) => {
              return ({
                ...selected,
                title,
                description,
                setShow : false
              })
            })
            SetEdit(false);
          }}><img src ={process.env.PUBLIC_URL + '/save-icon.png'}></img></button>) : (<button className="editnote-btn" onClick={() => {
            SetEdit((current) => !current);
          }}><img src ={process.env.PUBLIC_URL + '/edit-new-icon-22.png'}></img></button>)}

          <button className="delnote-btn" onClick={() => {
            setNotes((currentNotes) => {
              return currentNotes.filter((note) => {
                return note.id !== currentNote.id
              });
            });
            setMarkedNotes((currentNotes) => {
              return currentNotes.filter((note) => {
                return note.id !== currentNote.id
              });
            });
            navigate("/");
          }}><img src ={process.env.PUBLIC_URL + '/delete-icon.png'}></img></button>
        </div>
        <h2 className="title-head">📝 Title:</h2>
        {isEdit || currentNote.setShow ? (<input className="title-input" value={title} onChange={(e) => {
          setTitle(e.target.value);
        }}></input>) : (<h1 className="note-title">{currentNote.title}</h1>)}
        <hr />
         <h2 className="Description">🗒️ Description:</h2> 
        {isEdit || currentNote.setShow ? (<textarea className="desc-input" value={description} onChange={(e) => {
          setDescription(e.target.value);
        }}></textarea>) : (<p className="note-desc">{currentNote.description}</p>)}
      </main>
    )
}