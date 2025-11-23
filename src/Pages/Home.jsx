import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user, setuser }) => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/quiz")
    }
    return (
        <>
            <div className='min-h-screen flex justify-center items-center bg-gradient-to-l from-purple-600 via-indigo-600 to-blue-700 p-6'>

                <div className='max-w-2xl mx-auto flex flex-col gap-10 items-center bg-white/80 backdrop-blur-md p-10 rounded-xl shadow-xl font-serif'>


                    <h1 className='text-xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                        Welcome to Home Page...!</h1>

                    <form className='flex flex-col gap-6 items-center'>

                        <section className='flex gap-3 items-center'>
                            <label htmlFor="name" className='text-gray-600 font-medium'>Name:</label>

                            <input
                                type="text" name="name" id="name" className='bg-transparent border-b border-gray-400 text-gray-700 focus:outline-none focus:border-purple-600 px-1' required
                                onChange={(e) => { const { value } = e.target; setuser(value) }} />
                        </section>

                        <button onClick={handleSubmit} type='submit' className={`bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:scale-105 hover:shadow-lg duration-200 ${!user.trim() ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!user.trim()}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home
