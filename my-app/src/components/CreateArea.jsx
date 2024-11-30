import React,{useState} from "react";

function CreateArea(props) {
    const [note,setNote]=useState({
        title:"" ,
        content:""
    })  //creating dictionary


    function handleChange(event){
        const {name,value} = event.target;
        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            }
        })

    }
    function submitNote(event){
        props.onAdd(note)
        event.preventDefault() //prevent default behavior i mean remove loading when button press,
    }
  return (
    <div>
      <form>
        <input 
         name="title" 
         placeholder="Title" 
         onChange={handleChange} 
         value={note.title}
        />
        <textarea 
         name="content" 
         placeholder="Take a note..." 
         value={note.content}
         onChange={handleChange}  
         rows="3"  
        />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
