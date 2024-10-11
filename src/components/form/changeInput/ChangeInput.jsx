import { useState } from "react";
import './ChangeInput.css'

const ChangeInput = ({setTitles, titles, index}) => {
    const [newTitle, setNewTitle] = useState('');
    const [isEditOpen, setIsEditOpen] = useState(false);

    const updateTitle = (index) => {
        const newTitles = titles.map((t,i) => {
            if(i===index) return t = newTitle;
            return t
        })
        setNewTitle('');
        setTitles(newTitles);        
    }

    const deleteTitle = (index) => {
        setTitles(titles.filter((t,i) => i !== index));
    }
     return (
     <>
        <div>
            <button className={isEditOpen ? "d-none" : ""} onClick={ () => {deleteTitle(index)}}> Cancella </button>
            <span className={isEditOpen ? '' : 'd-none'}>
                <input value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}></input>
                <button onClick={() => updateTitle(index)}> Modifica</button>
            </span>
            <button onClick={() => setIsEditOpen(!isEditOpen)}> {isEditOpen ? "Chiudi modifica" : "Apri modifica"}</button>
        </div>
     </>
     )
}
export default ChangeInput;