import { useEffect, useState } from "react";
import "./SideBar.css"
import { useContext } from "react";
import { MarkedNotesContext, NotesContext, selectNoteContext } from "../../utils/NotesHooks/NotesContext";
import { useNavigate } from "react-router-dom";



export function MarkedNotes({Note,all,marked,setViewAll,setViewMarked}) {
     const {currentNote,setSelectedNote} = useContext(selectNoteContext);
     const {userNotes,setNotes} = useContext(NotesContext);
     const {markedNotes,setMarkedNotes} = useContext(MarkedNotesContext);
     const navigate = useNavigate();
     let bgColor;
    
     function randomBg() {
       let bgSpec = Math.floor(Math.random()*6)
       switch (bgSpec) {
        case 1:
            bgColor = "#d6dbd9"
            break;
        case 2:
            bgColor = "#8dc4e1"
            break;
        case 3:
            bgColor = "#ffbff8"
            break;
        case 4:
            bgColor = "#dbff26"
            break;
        case 5:
            bgColor = "#5dff43"
            break;
        default:
            bgColor = "#ffcb5c"
            break;
       }
       return bgColor;
     }
    
     const downloadAsTxt = (title,description) => {
        const text = `Title: ${title}\n\nDescription : ${description}`;
        const blob = new Blob([text],{
            type: "text/plain"
        })
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title}.txt`
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    
    const currentDate = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
      const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
      ];
    
    const monthName = months[currentDate.getMonth()];
    const dayName = days[currentDate.getDay()];
    
     function SelectedNote(noteObj) {
        return {
            ...noteObj,
            id: noteObj.id,
            title: noteObj.title,
            description: noteObj.description
        };
     }
     
    return (
        <>
        {marked && <div className="noteDiv" key={Note.id} onClick={() => {
        setSelectedNote(SelectedNote({
            ...Note,
            setShow : false
        }))
        navigate("/main-notes");
    }} style={{backgroundColor: randomBg()}}>
        <div className="date-top-box">{`🕒${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`}
            <button style={{backgroundColor: bgColor}} className="mark-button" onClick={(e) => {
                e.stopPropagation();
               setMarkedNotes((prevMarked) => {
                const isAlreadyMarked = prevMarked.some((n) => n.id === Note.id);
                if(isAlreadyMarked) {
                    return prevMarked.filter((n) => n.id !== Note.id);
                } else {
                    return [...prevMarked,Note];
                }
               });
                 
            }}>{markedNotes.some((n) => n.id === Note.id) ? <img src={process.env.PUBLIC_URL + '/gold-star.png'}></img> 
                : <img src={process.env.PUBLIC_URL + '/white-star.png'}></img>}</button>
        </div>
        <div className="title-div"><h2 className="title">📝 {Note.title}</h2></div>
        {/* <p className="desc">🗒️ Description</p> */}
        {/* <hr className="desc-line"/> */}
        <div className="desc-div"><p className="description">{Note.description}</p></div>
        <div className="date-box">Created at : {`${dayName}, ${currentDate.getDate()} ${monthName} ${currentDate.getFullYear()}`}</div>
        <div className="control-div">
            <button title="Edit" onClick={(e) => {
                e.stopPropagation();
                setSelectedNote(SelectedNote({
                    ...Note,
                    setShow : true
                }))
                navigate("/main-notes");
            }}><img className="edit-icon" src= {process.env.PUBLIC_URL + '/edit-new-icon-22.png'}></img></button>
            <button title="Delete" onClick={(e) => {
                e.stopPropagation();
                            setNotes((currentNotes) => {
                                return currentNotes.filter((note) => {
                                  return note.id !== Note.id 
                                });
                              });
                              setMarkedNotes((currentNotes) => {
                                return currentNotes.filter((note) => {
                                  return note.id !== Note.id 
                                });
                              });
            }}><img className="delete-icon" src={process.env.PUBLIC_URL + '/delete-icon.png'}/></button>
            <button title="Download File" style={{color: "black"}} onClick={(e) => {
                e.stopPropagation();
                downloadAsTxt(Note.title,Note.description);
            }}><img src={process.env.PUBLIC_URL + '/downloads-icon.png'} className="download-icon"></img></button></div>
     </div>}
        </>
    )
}