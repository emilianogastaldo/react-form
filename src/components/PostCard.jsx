import { useState } from 'react';
import './PostCard.css'
import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const PostCard = ({id, title, content, imageUrl, category, tags, published}) => {
    
    const deletePost = async (id) => {
        try{
            const res = await axios.delete(`${apiUrl}/posts/${id}`);
            if(res){
                fetchPosts()
            }
        }catch(err){
            console.error(err);
        }
    }

    const [deleteMode, setDeleteMode] = useState(false);

     return (
        <div className={`post ${published ? 'available' : ''}`}>
            
            <div className="card-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="card-content">
                <h3>{title}</h3>
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
            <dialog open={deleteMode}>
                <h3>Sei sicuro?</h3>
                <p>Se procedi eliminerai il {title}</p>
                <button>Elimina post</button>
                <button onClick={() => setDeleteMode(false)}>Torna indietro</button>
            </dialog>
        </div>
     )
}
export default PostCard;