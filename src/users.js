import axios from "axios";
import { useEffect, useState } from "react";
// import SearchInput, { createFilter } from 'react-search-input';

function Users({ title }) {
    const [users, setUsers] = useState([]);
    const [nameToSearch, setNameToSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([]);

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

    const handleSearch = (e) => {
        // const searchTerm = e.target.value.toLowerCase()
        setNameToSearch(e.target.value.toLowerCase());

        if (nameToSearch.length > 0) {
            const filtered = users.filter((user) => user.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setFilteredUsers(filtered)
        } else {
            setFilteredUsers([])
        }
    }


    // const KEYS_TO_FILTERS = ['name'];

    // const filterUsers = createFilter(searchTerm, KEYS_TO_FILTERS);

    // const filteredUsers = users.filter(filterUsers);

    return (
        <>
            <label htmlFor='search'>
                Search
                <input id='search' type='text' placeholder='Enter a name to search' onChange={handleSearch} value={nameToSearch} />
            </label>
            <h1>{title}</h1>
            <ul>
                {nameToSearch.length === 0
                    ? users.map((user) => <li key={user.id}>{user.name}</li>)
                    : filteredUsers.length > 0
                        ? filteredUsers.map((user) => <li key={user.id}>{user.name}</li>)
                        : <li>No Users Found!</li>
                }
            </ul>
        </>
    );
}

export default Users;