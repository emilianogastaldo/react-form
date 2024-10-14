import axios from "axios";
import { useEffect, useState } from "react";
const ButtonToDo = () => {

    const [toDos, setToDos] = useState([])

    const fetchToDos = async () => {
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setToDos(res.data);
        }catch(err){
            console.error(err);
        }
    }

    // useEffect(()=>{
    //     fetchToDos()
    // },[])

     return (
     <>
       <section>
        <button onClick={fetchToDos} >Raccogli to do</button>
        <button onClick={()=> {setToDos([])}} >Elimina</button>
        <ul>
            {toDos.map((todo)=>(
                <li key={`${todo.id}`}>{todo.title}</li>
            ))}
        </ul>
       </section>
     </>
     )
}
export default ButtonToDo;