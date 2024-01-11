import axios from "axios";
import { useEffect, useState } from "react";
import SearchInput, { createFilter } from 'react-search-input';

function Users({ title, searchTerm }) {
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        try {
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    setUsers(response.data);
                })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const KEYS_TO_FILTERS = ['name'];

    const filterUsers = createFilter(searchTerm, KEYS_TO_FILTERS);

    const filteredUsers = users.filter(filterUsers);

    return (
        <>
            <h1>{title}</h1>
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}

export default Users;