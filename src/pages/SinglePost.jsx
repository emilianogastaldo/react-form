import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const SinglePost = () => {
    const { id } = useParams();
    const location = useLocation();
    const[post, setPost] = useState(location?.state?.pizza || null);

    useEffect(() => {
        const url = `${apiUrl}/posts/${id}`;
        axios.get(url)
            .then(({data}) => setPost(data))
        // return () => {
        //     setPost(null);
        // }
    },[id]);

    const p = post;
    return (
    <>
      <h1>SHOW post</h1>
      {console.log(p)}
      {
        post === null ?
            <h1>loading</h1>
        :
            <PostCard
                id = {p.id}
                title = {p.title}
                content = {p.content}
                imageUrl = {p.image}
                category = {p.categoryId}
                tags = {p.tags}
                published = {p.published} 
                // onDelete= {onDelete} 
            />
      }
    </>
    )
}
export default SinglePost;