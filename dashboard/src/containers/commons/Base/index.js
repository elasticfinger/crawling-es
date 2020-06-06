import React,{useState, createContext,useEffect} from 'react'; 

const BaseContext = createContext({
    state:{
        name:'',
        logged : false,
    },
    actions :{
        setName : ()=>{},
        setLogged : ()=>{}
    }
});

const BaseProvider =({children})=>{
    const [name,setName] = useState('');
    const [logged,setLogged] = useState(false);

    // useEffect(()=>{
        
    // },[name])

    const value = {
        state : {name,logged},
        actions : {setName ,setLogged}
    }

    return (
        <BaseContext.Provider value = {value}>
            {children}
        </BaseContext.Provider>
    )
}

export {BaseProvider}
export default BaseContext;