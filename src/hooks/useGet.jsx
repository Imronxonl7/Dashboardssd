import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useGet = (url) => {
    const [data ,setData] = useState([])
    const [loading , setLoading] = useState(true)
    const getAllData = async() => {
        try{
            let res = await axios.get(`https://69243f273ad095fb84735a27.mockapi.io/${url}`)
            setData(res.data)
            setLoading(false)
        }catch(err){
            console.log(err);
            
        }
    }
useEffect(() => {
        getAllData()      
    } , [url])
  return {data , loading}
}

export default useGet