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
    tags: {
        type: 'multi-checkbox',
        options: ['css','js','php','html']
    },
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
            {Object.keys(formTemplate).map((name,index)=>{
                const template = formTemplate[name];
                if(typeof template === 'object'){
                    const {type, options} = template;
                    switch(type){
                        case 'select':
                            return(

                            )
                        case 'multi-checkbox':
                            return(
                                
                            )
                    }
                }else{
                    const type = template;
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
                    }
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