import { useState } from "react";
import ChangeInput from "./changeInput/ChangeInput";

const formTemplate = {
    title:'text',
    image: 'text',
    content: 'textarea',
    category: {
        type: 'select',
        options: ['frontend', 'backend', 'fullstack']
    },
    tags: ['css','js','php','html'],
    published: 'checkbox'
}

const Form = () => {
    const [titles, setTitles] = useState([]);
    const [title, setTitle] = useState('');

    const initialData = {
        title: '',
        image: '',
        content: '',
        category: '',
        tags: [],
        published: false
    };

    const [form, setForm] = useState(initialData);
    const submitTitle = () => {
        if(title === '' ) return;
        setTitles( prevTitles => [...prevTitles, title ]);
        setTitle('')
    }
    
    const titleChange = e => {
        setTitle(e.target.value);
    }
    
    const deleteTitle = (index) => {
        setTitles(titles.filter((t,i) => i !== index));
    }
    
    const handleSubmit = e =>{
        e.preventDefault();
    }

    return (
    <>  
        <form onSubmit={handleSubmit}>
            <h1>Inserisci un nome</h1>
            <input type="text" value={title} onChange={titleChange} />
            <button>Salva</button>
        </form>
        
        <ul>
            {titles.map((t,i)=>{
              return <li key={`key-${i}`}>
                {t} 
                <ChangeInput
                    titles = {titles}
                    setTitles = {setTitles}
                    index = {i}
                />
                </li>
            })}
        </ul>
    </>
    )
}
export default Form;