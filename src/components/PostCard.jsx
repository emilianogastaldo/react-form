import { useEffect, useRef, useState } from 'react';
import './PostCard.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const PostCard = ({id, title, content, imageUrl, category, tags, published, onDelete}) => {

    const [deleteMode, setDeleteMode] = useState(false);

    const dialogRef = useRef();

    const deletePost = async () => {
        await onDelete(id);
        setDeleteMode(false);
    }
    useEffect(()=>{
        if(deleteMode){
            dialogRef.current.showModal();
        }else{
            dialogRef.current.close();
        }
    },[deleteMode])

     return (
        <div className={`post ${published ? 'available' : ''}`}>
            
            <div className="card-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="card-content">
                <h3><Link to={`/posts/${id}`}>{title}</Link></h3>
                {tags.length > 0 ? 
                    <div className="tag">
                        <strong>Tag:</strong>
                        <ul>
                            {tags.map(tag => (
                                <li key={`tag${tag.id}`}>{tag.name}</li>
                            ))}
                        </ul>
                    </div>
                :
                    <strong>Tag non specificati</strong>
                }
                <p className={`${!content ? 'italic' : ''}`}>
                    {content || "Descrizione non disponibile"}
                </p>
            </div>
            <button onClick={() => setDeleteMode(true)}>Elimina</button>
            <dialog ref={dialogRef}>
                <h3>Sei sicuro?</h3>
                <p>Se procedi eliminerai il {title}</p>
                <button onClick={() => deletePost()}>Elimina post</button>
                <button onClick={() => setDeleteMode(false)}>Torna indietro</button>
            </dialog>
        </div>
     )
}
export default PostCard;