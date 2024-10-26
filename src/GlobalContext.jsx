/*
    Creo il "contesto" in cui potrò salvare e accedere vari dati, così da evitare prop drilling eccessivi
    Una volta creato va esportato e importato dove wrapperò tutti gli elemento che voglio abbiano accesso a questo context
    usando il tag <GlobalContext.Provider value={{}} > ... </GlobalContext.Provider>

    Per usare il context all'interno del componente vado a creare un value --> const value = useContext(GlobalContext);
    che posso destruttare, es: const {tags, categories} = useContext(GlobalContext);

*/ 
import { createContext } from "react";

const GlobalContext = createContext();

export default GlobalContext;