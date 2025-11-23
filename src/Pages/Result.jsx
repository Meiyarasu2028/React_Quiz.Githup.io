import React, { useEffect } from 'react'
import Cup from "../assets/cup.png"
import { useNavigate } from 'react-router-dom'

const Result = ({ user, score }) => {

    const navigatoe = useNavigate()

    useEffect(() => {
        if (!user) {
            navigatoe("/")
        }
    }, [user])

    const handleHome = ()=>{
        navigatoe("/")
    }
    return (
        <>
            <div className='bg-gray-200 min-h-screen w-full'>

                <div className='flex  flex-col items-center p-10'>
                    <h1 className='text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold m-6'>Quiz Summery</h1>
                    <div className='border p-10 rounded-2xl shadow-2xl flex flex-col gap-5 w-96 mt-20 relative'>
                        <img src={Cup} alt="cup" className="w-32 absolute -top-20 left-1/2 -translate-x-1/2" />
                        <p className='text-2xl font-bold bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Hello <span className='text-xl bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 bg-clip-text text-transparent' style={{ textTransform: "uppercase" }}>{user}</span></p>
                        <p className='text-2xl text-green-500 font-bold'>Congratulations! 🏆⭐</p>
                        <p className='text-xl font-medium'>You've Scored <span className='text-green-500'>+{score}</span> points</p>
                        <p onClick={handleHome} className='cursor-pointer' >🡄 Back to home</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Result