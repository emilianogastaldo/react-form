/*
    Creo il "contesto" in cui potrò salvare e accedere vari dati, così da evitare prop drilling eccessivi
    Una volta creato va esportato e importato dove wrapperò tutti gli elemento che voglio abbiano accesso a questo context
    usando il tag <GlobalContext.Provider value={{}} > ... </GlobalContext.Provider>

    Per usare il context all'interno del componente vado a creare un value --> const value = useContext(GlobalContext);
    che posso destruttare, es: const {tags, categories} = useContext(GlobalContext);

    Per usare meglio questa tecnologia posso crearmi qui un elemento GlobalContextProvider per poi esportarlo

*/ 
import { createContext, useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const[tags, setTags] = useState(['js','css','html']);
    const[categories, setCategories] = useState(['back','front','full']);

    return (
        <GlobalContext.Provider
            value={{
            tags,
            categories
        }}>
        {children}
        </GlobalContext.Provider>
    )
}

// Creo un hook personalizzato per usare il GlobalProvider
const useGlobal = () => {
    const value = useContext(GlobalContext);
    // Se non sono in un elemento consumer il value sarà undefined
    if(value === undefined){
        throw new Error('Non sei dentro al GlobalContext Provider');
    }
    return value;
}

export {GlobalProvider, useGlobal};