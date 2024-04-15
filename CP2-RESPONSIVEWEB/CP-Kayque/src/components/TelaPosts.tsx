import React, { useEffect, useState } from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const TelaPosts: React.FC = () => {
    const [posts,setPosts] = useState<Post[]>([]);

    useEffect(()=> {
        const fetchPosts = async () => {
            const url = "https://jsonplaceholder.typicode.com/posts"
            try{
                const response = await fetch (url);
                if (!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data)
            }catch (error){
                console.error("Error fetching posts:", error);
            }
            
        };
        fetchPosts();
    },[]);
    
    return(
        <div>
        <h1 className='font-bold text-center'>POSTS</h1>
        <br></br>
            <ul className='p-5'>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2 className='font-bold'>{post.title}</h2>
                        <p>{post.body}</p>
                        <br></br>
                        <br></br>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TelaPosts;