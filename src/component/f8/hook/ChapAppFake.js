import React, { useEffect, useState } from 'react'
const lessons = [
    {
        id: 1,
        name: 'html - css'
    },
    {
        id: 2,
        name: 'javascript'
    },
    {
        id: 3,
        name: 'nodejs'
    }
]
export default function ChapAppFake() {
    const [lessonId, setLessonId] = useState(1);
    const handleComment = ({detail}) => {
        console.log(detail);
    }
    useEffect(() => {

        // listen event 
        window.addEventListener(`lesson-${lessonId}`, handleComment);
        return () => {
            // remove listen event when component unmouted
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li key={lesson.id} style={{ color: lessonId === lesson.id ? 'red' : 'black' }} onClick={() => { setLessonId(lesson.id) }}>
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
