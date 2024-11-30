import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note,setNote]=useState({
        title:"" ,
        content:""
    })  //creating dictionary

    const [isExpand,setExpand]=useState(false)

    function handleClick(){
      setExpand(true)
    }


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
      <form className="create-note">
        {isExpand &&
        <input 
        name="title" 
        placeholder="Title" 
        onChange={handleChange} 
        value={note.title}
        />

        }

        <textarea 
         name="content" 
         placeholder="Take a note..." 
         value={note.content}
         onChange={handleChange}  
         onClick={handleClick}
         rows={isExpand?3:1}
        />
        <Zoom in={isExpand}>
          <Fab onClick={submitNote} >
            <AddIcon />
          </Fab>

        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
