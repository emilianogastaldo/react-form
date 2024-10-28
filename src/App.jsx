import Form from './components/Form'
import { useEffect, useState } from 'react'
import { GlobalProvider } from './GlobalContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DafaultLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contacts from './pages/Contacts';
import Posts from './pages/Posts';
import './index.css'
import SinglePost from './pages/SinglePost';

const App = () => {
    const [mostraComponente, setMostraComponente] = useState(false);
    useEffect(()=>{
    },[])

     return (
      <GlobalProvider>
         {/* #TODO Rotte  */}
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<DefaultLayout/>}>                  
                     <Route index element={<Home/>} />
                     <Route path="*" element={<NotFound/>} />
                     <Route path="contacts" element={<Contacts/>} />
                     
                     <Route path="posts">
                        <Route index element={<Posts/>} />
                        <Route path=":id">
                           <Route index element={<SinglePost/>}/>
                        </Route>
                        {/* 
                           <Route path="edit" element={<EditPost/>}/>
                        <Route path="create" element={<CreatePost/>}/> */}
                     </Route>
                  </Route>
               </Routes>
            </BrowserRouter>
         
         {/* <div className='p-2'>
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
         </div> */}
      </GlobalProvider>

     )
}
export default App;