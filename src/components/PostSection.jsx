import axios from "axios";
import { useEffect, useState } from "react";

const PostSection = () => {
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        try{
            const res = await axios.get('http://localhost:8000/posts');
            const fetchedPosts = res.data.posts;
            setPosts(fetchedPosts);
        }catch(err){
            console.error(err);
        }
    }
    const deletePost = async (id) => {

        try{
            const res = await axios.delete(`http://localhost:8000/posts/${id}`);
        }catch(err){
            console.error(err);
        }finally{
            fetchPosts();
        }
    }
    useEffect(()=>{
        fetchPosts()
    },[])
     return (
     <>
       <section>
       <button onClick={fetchPosts} >Raccogli post</button>
       <button onClick={()=> {setPosts([])}} >Nascondi lista</button>
       <ul>
            {posts.map((post)=>(
                <li key={`${post.id}`}>{post.title} <button onClick={()=>(deletePost(post.id))}>Elimina post</button></li>
            ))}
        </ul>

       </section>
     </>
     )
}
export default PostSection;