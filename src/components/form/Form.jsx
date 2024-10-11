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
        label:'Categoria',
        options: [
            {
                label:'Front End',
                value: 'front'
            },
            {
                label:'Back End',
                value: 'back'
            },
            {
                label:'Full Stack',
                value: 'full'
            }
        ]
    },
    tags: {
        type: 'multi-checkbox',
        label:'Tag',
        options: [
            {
                label:'CSS',
                value: 'css'
            },
            {
                label:'HTML',
                value: 'html'
            },
            {
                label:'PHP',
                value: 'php'
            },
            {
                label:'JavaScript',
                value: 'js'
            }
        ]
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

    const [formData, setFormData] = useState(initialData);
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
    
    const changeData = (key, value) => {
        setFormData(curr => ({
            ...curr,
            [key]: value
        }))
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
                                <input
                                    key={`form-element${index}`}
                                    name={name}
                                    type="text"
                                    placeholder={label}
                                    value={formData[name]}
                                    onChange={e => changeData(name, e.target.value)}
                                />
                            )
                        case 'textarea':
                            return(
                                <textarea
                                    key={`form-element${index}`}
                                    name={name}
                                    placeholder={label}
                                    value={formData[name]}
                                    onChange={e => changeData(name, e.target.value)}
                                />
                            )
                        case 'checkbox':
                            return(
                                <input
                                    key={`form-element${index}`}
                                    name={name}
                                    type="checkbox"
                                    placeholder={label}
                                    checked={formData[name]}
                                    onChange={e => changeData(name, e.target.checked)}
                                />
                            )
                        case 'select':
                            return(
                                <select 
                                    key={`form-element${index}`}
                                    name={name}
                                    value={formData[name]}
                                    onChange={e => changeData(name, e.target.value)}
                                >
                                    {options.map((option, o)=>(
                                        <option
                                            key={`form-element${index}-option${o}`}
                                            value={option.value}

                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
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