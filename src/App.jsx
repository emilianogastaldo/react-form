import Form from './components/Form'
import './index.css'
import PostSection from './components/PostSection'
import { useEffect, useState } from 'react'
import axios from "axios";
import GlobalContext from './GlobalContext';
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const App = () => {
    const [mostraComponente, setMostraComponente] = useState(false)
    const [response, setResponse] = useState(null);
    
    const[tags, setTags] = useState(['js','css','html']);
    const[categories, setCategories] = useState(['back','front','full']);
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
      <GlobalContext.Provider 
         value={{
            tags,
            categories
         }}
      >
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
      </GlobalContext.Provider>

     )
}
export default App;