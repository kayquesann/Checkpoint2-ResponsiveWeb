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
            <h1 className='text-center font-bold'>USERS</h1>
            <table className='table-auto border border-collapse border-black'>
                <tr>
                    <th className='border border-black px-4 py-2'>ID</th>
                    <th className='border border-black px-4 py-2'>Name</th>
                    <th className='border border-black px-4 py-2'>Username</th>
                    <th className='border border-black px-4 py-2'>Email</th>
                </tr>
                {users.map(user => (
                    <tr key={user.id}>
                        <td className='border border-black px-4 py-2'>{user.id}</td>
                        <td className='border border-black px-4 py-2'>{user.name}</td>
                        <td className='border border-black px-4 py-2'>{user.username}</td>
                        <td className='border border-black px-4 py-2'>{user.email}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default TelaUsuarios;