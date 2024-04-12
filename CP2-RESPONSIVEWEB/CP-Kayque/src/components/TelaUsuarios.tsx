import React, { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const TelaUsuarios: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const url = "https://jsonplaceholder.typicode.com/users";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return(
        <div>
            <h1 className='font-bold text-center'>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p className='font-bold'>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TelaUsuarios;