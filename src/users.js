import axios from "axios";
import { useEffect, useState } from "react";
// import SearchInput, { createFilter } from 'react-search-input';

function Users({ title }) {
    const [users, setUsers] = useState([]);
    const [nameToSearch, setNameToSearch] = useState('')

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
      setNameToSearch(e.target.value);
      users.filter((user) => {
        if(user.name === e.target.value){
            return user.name
        } else {return 'No Users Found!'}
      })
    }

    // const KEYS_TO_FILTERS = ['name'];

    // const filterUsers = createFilter(searchTerm, KEYS_TO_FILTERS);

    // const filteredUsers = users.filter(filterUsers);

    return (
        <>
        <label htmlFor='search'>
          Search
          <input id='search' type='text' placeholder='Enter a name to search' onChange={handleSearch} />
        </label>
            <h1>{title}</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}

export default Users;