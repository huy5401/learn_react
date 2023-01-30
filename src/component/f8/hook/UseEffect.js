import React, { useEffect, useState } from 'react'


// 1. useEffect(callback) - goi moi khi component re-render
// 2. useEffect(callback, [])- goi 1 lan sau khi component mounted
// 3. useEffect(callback, [dependencies])  - callback dc goi lai sau khi dependencies thay doi 

// goi khi component mounted

export default function () {
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    const tabs = ['posts', 'comments', 'albums'];
    const [countdown, setCountdown] = useState(180);
    const [avatar, setAvatar] = useState();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [type]);
    // useEffect( () => {
    //     const timerId = setInterval(() => {
    //         setCountdown(prestate => prestate -1);
    //     }, 1000);
    //     return () => clearInterval(timerId); 
    // }, [])
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar])
    const handlePreviewAvatart = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    }
    return (
        <div>
            <div>
                {
                    tabs.map((tab) => {
                        return (
                            <button key={tab}
                                style={type === tab ? { color: '#fff', backgroundColor: '#333' } : {}}
                                onClick={() => { setType(tab) }}
                            >{tab}</button>
                        )
                    })
                }
            </div>
            {/* <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            {post.name || post.title}
                        </li>
                    )
                })}
            </ul> */}
            {/* <div>{countdown}</div> */}
            <input type='file' onChange={handlePreviewAvatart} />
            {avatar && (<img src={avatar.preview} alt='' width='40%' height='40%'/>)}
        </div>
    )
}
