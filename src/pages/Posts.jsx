import { useState } from "react";
import PostSection from "../components/PostSection";
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const Posts = () => {

    const [response, setResponse] = useState(null);

    const fetchPosts = async (page) => {
       try{
         setResponse(null);
         const res = await axios.get(`${apiUrl}/posts?page=${page}&limit=3`);
         setResponse(res.data);
      }catch(err){
         console.error(err);
      }
    }

    const deletePost = async (id) => {
        try{
            const res = await axios.delete(`${apiUrl}/posts/${id}`);
            fetchPosts(1);
        }catch(err){
            console.error(err);
        }
    }
     return (
     <>
       <button onClick={()=> fetchPosts(1)} >Raccogli post</button>
         <PostSection
               response={response}
               onPageChange={page => fetchPosts(page)}
               onDelete = {deletePost}
               
         />
     </>
     )
}
export default Posts;