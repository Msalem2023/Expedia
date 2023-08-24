import axios from "axios"
import { useEffect, useState } from "react"

const useFetch=(url)=>{
    console.log(url)
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            try {
                const res=await axios.get(url);
                setData(res.data.data)
                
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchData()
    },[])


const reFetch=async()=>{
    setLoading(true)
    try {
        const res=await axios.get(url);
                setData(res.data.Newdata)
        
    } catch (error) {
        setError(error)
        
    }
    setLoading(false)
};

return {data,loading,error,reFetch}
}

export default useFetch