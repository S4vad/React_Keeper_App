import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea";

function App(){
    const [notes,setNote]=useState([]);
    function addNote(newNote){
        setNote(prevNote=>{
            return [...prevNote,newNote]
        }) 
    }

    function deleteNote(id){ //this id come from Note.jsx props.id
        setNote(prevNote=>(
            notes.filter((noteItem,index)=>(
                index !==id
            ))
        ))

    }

    
    return <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) => (
                <Note 
                    key={index} // Add a unique key for each item in the list //here note using 
                    id={index}
                    title={noteItem.title} 
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
        ))}
        <Footer />

        

    </div>
}

export default App;