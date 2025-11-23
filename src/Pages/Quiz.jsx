import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Quiz = ({ setscore,user }) => {

    const navigatoe = useNavigate()

    useEffect(() => {
        if (!user) {
            navigatoe("/")
        }
    }, [user])

    const [questions] = useState([
        {
            question: "What is React?",
            options: ["Library", "Framework", "Language"],
            answer: "Library"
        },
        {
            question: "Who created React?",
            options: ["Google", "Facebook", "Amazon"],
            answer: "Facebook"
        },
        {
            question: "What is JSX?",
            options: ["A CSS Library", "A JavaScript XML syntax", "A backend framework"],
            answer: "A JavaScript XML syntax"
        },
        {
            question: "Which hook is used to store component state?",
            options: ["useEffect", "useState", "useMemo"],
            answer: "useState"
        },
        {
            question: "Which hook runs after every render?",
            options: ["useEffect", "useRef", "useCallback"],
            answer: "useEffect"
        },
        {
            question: "How do you pass data from parent to child?",
            options: ["Using state", "Using props", "Using reducers"],
            answer: "Using props"
        },
        {
            question: "What is the purpose of the useRef hook?",
            options: ["To fetch data", "To store mutable values", "To update UI"],
            answer: "To store mutable values"
        },
        {
            question: "What is Virtual DOM?",
            options: [
                "An actual browser DOM",
                "A lightweight copy of the real DOM",
                "A database model"
            ],
            answer: "A lightweight copy of the real DOM"
        },
        {
            question: "Which method is used for conditional rendering?",
            options: ["if/else", "switch", "Both"],
            answer: "Both"
        },
        {
            question: "What is useNavigate used for in React Router?",
            options: ["To style components", "To navigate between pages", "To fetch API"],
            answer: "To navigate between pages"
        }
    ]
    )

    const [questionIdx, setquestionIdx] = useState(0)

    const handleAnswer = (selected) => {
        const isCorrect = selected === questions[questionIdx].answer

        if (isCorrect) {
            setscore((prevScore) => prevScore + 10)
        }

        if (questionIdx < questions.length - 1) {
            setquestionIdx((prevIdx) => prevIdx + 1)
        }
        else {
            navigatoe("/result")
        }
    }

    return (
        <div className="flex flex-col items-center mt-16">
            <h1 className="text-xl md:text-4xl font-semibold mb-6">Welcome to Quiz Page! 🎯</h1>

            <div className="w-full max-w-md shadow-xl rounded-2xl p-8 bg-white border">

                <h2 className="text-xl font-semibold mb-6">
                    {questionIdx + 1}. {questions[questionIdx].question}
                </h2>

                <div className="flex flex-col gap-3">
                    {questions[questionIdx].options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(option)}
                            className="px-4 py-3 rounded-lg border text-lg font-medium w-full hover:bg-blue-500
                             hover:text-white transition-all duration-200 active:scale-95 ">{option} </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Quiz
