import axios from 'axios'
import React from 'react'

const useMutate = () => {
    const addMutate = async({url , payload , method , id}) => {
        try {
            if(method === "post"){
                    let res = await axios.post(`https://69243f273ad095fb84735a27.mockapi.io/${url}` , payload)   
                 return res.data
            }else if(method === "put"){
                let res = await axios.post(`https://69243f273ad095fb84735a27.mockapi.io/${url}/${id}` , payload)   
                 return res.data
            }else if(method === "delete"){
                await axios.delete(`https://69243f273ad095fb84735a27.mockapi.io/${url}/${id}`)
            }

        } catch (error) {
            console.log(error);
            
        }
    }
  return {addMutate}
  
}

export default useMutate