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
            <button onClick={() => (deletePost(id))}>Elimina</button>
        </div>
     )
}
export default PostCard;