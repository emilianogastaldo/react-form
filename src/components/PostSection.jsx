import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostSection = ({response, onPageChange}) => {

    const [currPage, setCurrPage] = useState(1);

    useEffect(()=>{
        onPageChange(currPage)
    },[currPage])
     return (
     <>
        <section>
            {console.log("respose da PostSection: ", response)}
           
            <div>
                <div className="paginator">
                    Pagina {currPage} di {response?.totalPages}
                    {/* Renderizzo o meno i bottoni in base a che pagina mi trovo */}
                    {currPage - 1 > 0 && <button onClick={()=>setCurrPage(curr => curr - 1)}>-</button>}
                    {currPage + 1 <= response?.totalPages && <button onClick={()=>setCurrPage(curr => curr + 1)}>+</button>}                    
                </div>
                {response === null && 'Caricando i post...'}
                {response?.posts?.length === 0 && 'Non ci sono post'}                
                {response?.posts?.length > 0 &&
                    response.posts.map(post => (
                         <PostCard
                         key={`post${post.id}`} 
                         id = {post.id}
                         title = {post.title}
                         content = {post.content}
                         imageUrl = {post.image}
                         category = {post.categoryId}
                         tags = {post.tags}
                         published = {post.published}                     
                        />
                    // <li key={`${post.id}`}  >{post.title} <button onClick={()=>(deletePost(post.id))}>Elimina post</button></li>
                ))
                }
                
                
            </div>
       </section>
     </>
     )
}

export default PostSection;