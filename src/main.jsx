import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './components/Form'
import './index.css'
import ButtonToDo from './components/ButtonToDo'
import PostSection from './components/PostSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form/>
    <PostSection/>
  </StrictMode>,
)
