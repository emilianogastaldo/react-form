import { useEffect, useState } from "react";
import MultiCheckbox from "./MultiCheckbox";

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
    const initialData = {
        title: '',
        image: '',
        content: '',
        category: '',
        tags: [],
        published: false
    };

    const [formData, setFormData] = useState(initialData);
    
    const changeData = (key, value) => {
        setFormData(curr => ({
            ...curr,
            [key]: value
        }))
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(formData);
        setFormData(initialData);
    }
// Questo non funziona
    // useEffect(() => {
    //     return () => {
    //         alert('Stai cambiando il pubblicantibus');
    //     }
    // },[formData.published]);
// Questo invece funziona
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        if (isMounted) {
            alert('Stai cambiando il pubblicantibus');
        } else {
            setIsMounted(true);
        }
    }, [formData.published]);

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
                                <label
                                    key={`form-element${index}`}
                                >
                                    {label}
                                    <input                                        
                                        name={name}
                                        type="checkbox"
                                        checked={formData[name]}
                                        onChange={e => changeData(name, e.target.checked)}
                                    />
                                </label>
                            )
                        case 'select':
                            return(
                                <label key={`form-element${index}`}>
                                    {label}:
                                    <select 
                                        name={name}
                                        value={formData[name]}
                                        onChange={e => changeData(name, e.target.value)}
                                    >
                                        <option value="">Selezione un'opzione</option>
                                        {options.map((option, o)=>(
                                            <option
                                                key={`form-element${index}-option${o}`}
                                                value={option.value}

                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            )
                        case 'multi-checkbox':
                            return(
                                <MultiCheckbox
                                    key={`form-element${index}`}
                                    label={label}
                                    options={options}
                                    values={formData[name]}
                                    onChange={value => changeData(name, formData[name].includes(value) ? 
                                        formData[name].filter(el => el !== value) :
                                        [...formData[name], value]
                                    )}
                                />
                            )
                    }
                })
            }
            <button>Salva</button>
        </form>
    </>
    )
}
export default Form;