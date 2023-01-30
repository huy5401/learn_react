import React, { useEffect, useState } from 'react'


// 1. useEffect(callback) - goi moi khi component re-render
// 2. useEffect(callback, [])- goi 1 lan sau khi component mounted
// 3. useEffect(callback, [dependencies])  - callback dc goi lai sau khi dependencies thay doi 

// goi khi component mounted

export default function () {
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    const tabs = ['posts','comments','albums']
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [type])
    return (
        <div>
            <div>
                {
                    tabs.map((tab) => {
                        return (
                            <button key={tab}
                            style={type === tab ? {color:'#fff', backgroundColor: '#333'} : {}}
                            onClick={() => {setType(tab)}}
                            >{tab}</button>
                        )
                    })
                }
            </div>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            {post.name || post.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
