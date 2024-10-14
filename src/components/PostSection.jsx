import axios from "axios";
import { useState } from "react";

const PostSection = () => {
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        try{
            const res = await axios.get('http://localhost:8000/posts');
            const fetchedPosts = res.data.posts;
            console.log(fetchedPosts);
            setPosts(fetchedPosts);
        }catch(err){
            console.error(err);
        }
    }
     return (
     <>
       <section>
       <button onClick={fetchPosts} >Raccogli post</button>
       <button onClick={()=> {setPosts([])}} >Elimina tutto</button>
       <ul>
            {posts.map((post)=>(
                <li key={`${post.id}`}>{post.title}</li>
            ))}
        </ul>

       </section>
     </>
     )
}
export default PostSection;