import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginPage = ({setIsLogin}) => {
    const [phone , setPhone ] = useState("")
    const [password , setPassword ] = useState("")
    const navigate = useNavigate()
    const [phoneError , setPhonerError] = useState("")
    const [passwordError , setPasswordError] = useState("")
    function login(e){
        e.preventDefault()
        if(phone === "+998937550412" && password === "asilbek1020"){
            setIsLogin(localStorage.setItem("auth" , true))
            navigate("/teachers")
            toast.success("Tizimga muvaffaqiyatli kirdigniz")
        }else{
            setPhonerError("Telefon raqamni noto'g'ri kiritdigniz")
            setPasswordError("Parolni raqamni noto'g'ri kiritdigniz")
            toast.error("Raqam yoki parol xato")
        }
    }
  return (
    <div className='bg-gray-300 flex items-center justify-center flex-col h-screen'>
        <form 
        onSubmit={login}
        className='flex flex-col gap-5 p-5 max-w-[450px] w-full rounded-[20px] bg-white'>
            <div className='flex w-full flex-col'>
                <input
            onChange={ (e) => setPhone(e.target.value)} 
            className='outline-none border-gray-800 border-[2px] rounded-[10px] p-2 text-[20px]' type="text" placeholder='Telefon raqam' />
            <span className='inline-block text-red-700 '>
                {phoneError ? phoneError : "" }
            </span>
            </div>
            <div className='w-full flex flex-col'>
                <input 
            onChange={ (e) => setPassword(e.target.value)} 
            className='outline-none border-gray-800 border-[2px] rounded-[10px] p-2 text-[20px]' type="password" placeholder='Parolni kiriting' />
            <span className='inline-block text-red-700 '>
                {passwordError ? passwordError : "" }
            </span>
            </div>
            <button type='submit' className='bg-gray-800 text-[20px] text-gray-300 py-2 rounded-[10px]'>Kirish</button>
        </form>
    </div>
  )
}

export default LoginPage