import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";
import './Form.css';
import axios from "axios";
import { useGlobal } from "../GlobalContext";

// Creo un templare con tutti i dati del form che mi servono
const formTemplate = {
    title:{
        type:'text',
        label:'Titolo',
        default: ''
    },
    image: {
        type:'file',
        label:'Immagine',
        default: ''

    },
    content: {
        type:'textarea',
        label:'Contenuto',
        default: ''

    },
    categoryId: {
        type: 'select',
        label:'Categoria',
        default: '',
        options: [
            {
                label:'Front End',
                value: 1
            },
            {
                label:'Back End',
                value: 2
            },
            {
                label:'Full Stack',
                value: 3
            }
        ]
    },
    tags: {
        type: 'multi-checkbox',
        label:'Tag',
        default: [],
        options: [
            {
                label:'CSS',
                value: 1
            },
            {
                label:'HTML',
                value: 2
            },
            {
                label:'PHP',
                value: 3
            },
            {
                label:'JavaScript',
                value: 4
            }
        ]
    },
    published: {
        type:'checkbox',
        label:'Pubblicato',
        default: false
    }
}

const Form = () => {

    const value = useGlobal();

    // Inizializzo i dati iniziali del form
    const initialData = {};
    for(const key in formTemplate){
        initialData[key] = formTemplate[key].default;
    }

    // Creo un useState per controllare e raccogliere i dati del form
    const [formData, setFormData] = useState(initialData);

    // Funzione per salvare i nuovi dati
    const changeData = (key, value) => {
        setFormData(curr => ({
            ...curr,
            [key]: value
        }))
    }

    // Funzione per il submit del form
    const handleSubmit = async e =>{
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:8000/posts', formData, {
                headers: {
                    "Content-Type":"multipart/form-data"
                }
            });
        }catch(err){
            console.error(err)
        }
        setFormData(initialData);
    }
// Questo non funziona
    // useEffect(() => {
    //     return () => {
    //         alert('Stai cambiando il pubblicantibus');
    //     }
    // },[formData.published]);
// Questo invece funziona
    // const [isMounted, setIsMounted] = useState(false);
    // useEffect(() => {
    //     if (isMounted) {
    //         alert('Stai cambiando il pubblicantibus');
    //     } else {
    //         setIsMounted(true);
    //     }
    // }, [formData.published]);

    return (
    <>  
        <form onSubmit={handleSubmit}>
            {Object.keys(formTemplate).map((name,index)=>{
                // Per ogni chiave dell'oggetto, controllo che tipo di input mi serve e lo creo
                const {type, label, options} = formTemplate[name];
                    switch(type){                        
                        case 'text':
                            return(
                                <label className="flex-column" key={`form-element${index}`}>
                                    {label}
                                    <input
                                        name={name}
                                        type="text"
                                        placeholder={label}
                                        value={formData[name]}
                                        onChange={e => changeData(name, e.target.value)}
                                    />
                                </label>
                            )
                        case 'file':
                            return(
                                <label className="flex-column" key={`form-element${index}`}>
                                    {label}
                                    <input
                                        name={name}
                                        type="file"
                                        placeholder={label}
                                        onChange={e => changeData(name, e.target.files[0])}
                                    />
                                </label>
                            )
                        case 'textarea':
                            return(
                                <label className="flex-column" key={`form-element${index}`}>
                                    {label}
                                    <textarea
                                        name={name}
                                        placeholder={label}
                                        value={formData[name]}
                                        onChange={e => changeData(name, e.target.value)}
                                        rows={5}
                                    />
                                </label>
                            )
                        case 'checkbox':
                            return(
                                <label key={`form-element${index}`}>
                                    <input                                        
                                        name={name}
                                        type="checkbox"
                                        checked={formData[name]}
                                        onChange={e => changeData(name, e.target.checked)}
                                        className="m-right"
                                    />
                                    {label}
                                </label>
                            )
                        case 'select':
                            return(
                                <label className="flex-column" key={`form-element${index}`}>
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
            <button className="submit-button">Salva</button>
        </form>
    </>
    )
}
export default Form;