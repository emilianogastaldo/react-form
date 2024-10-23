import Form from './components/Form'
import './index.css'
import PostSection from './components/PostSection'
import { useEffect, useState } from 'react'
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const App = () => {
    const [mostraComponente, setMostraComponente] = useState(false)
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
    useEffect(()=>{
    },[])

     return (
     <div className='p-2'>
        <button onClick={()=> setMostraComponente(curr => !curr)}>{mostraComponente ? 'Nascondi form' : 'Mostra form'}</button>
        {mostraComponente && 
        <Form
            onCreate={() => {
               // setShowCreateForm(false);
               fetchPosts(1);
            }}
         />}
        <button onClick={()=> fetchPosts(1)} >Raccogli post</button>
        <PostSection
            response={response}
            onPageChange={page => fetchPosts(page)}
            onDelete = {deletePost}
            
        />
     </div>
     )
}
export default App;