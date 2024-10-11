import { useState } from "react";
import ChangeInput from "./changeInput/ChangeInput";

const formTemplate = {
    title:{
        type:'text',
        label:'Titolo'
    },
    image: {
        type:'text',
        label:'Immagine'
    },
    content: {
        type:'textarea',
        label:'Contenuto'
    },
    category: {
        type: 'select',
        options: ['frontend', 'backend', 'fullstack'],
        label:'Categoria'
    },
    tags: {
        type: 'multi-checkbox',
        options: ['css','js','php','html'],
        label:'Tag'
    },
    published: {
        type:'checkbox',
        label:'Pubblicato'
    }
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
            {Object.keys(formTemplate).map((name,index)=>{
                const {type, label, options} = formTemplate[name];
                    switch(type){                        
                        case 'text':
                            return(

                            )
                        case 'textarea':
                            return(

                            )
                        case 'checkbox':
                            return(

                            )
                        case 'select':
                            return(

                            )
                        case 'multi-checkbox':
                            return(
                                
                            )
                    }
                })
            }
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