import axios from "axios";
import { useEffect, useState } from "react";
// import SearchInput, { createFilter } from 'react-search-input';

function Users({ title, searchTitle }) {
    const [users, setUsers] = useState([]);
    const [nameToSearch, setNameToSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [filterLetter, setFilterLetter] = useState('');
    const [filteredUsersByLetter, setFilteredUsersByLetter] = useState([])

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

    const handleFilter = (e) => {
        const letter = e.target.value
        setFilterLetter(letter)
        const alphabetFiltered = users.filter((user) => user.name[0].toUpperCase() === letter)
        setFilteredUsersByLetter(alphabetFiltered)
    }


    // const KEYS_TO_FILTERS = ['name'];

    // const filterUsers = createFilter(searchTerm, KEYS_TO_FILTERS);

    // const filteredUsers = users.filter(filterUsers);

    return (
        <>
            <label htmlFor='search'>
                {searchTitle}
                <input id='search' type='text' placeholder='Enter a name to search' onChange={handleSearch} value={nameToSearch} />
            </label>
            <label htmlFor="filter">
                Filter
            </label>
            <select id="filter" name="alphabeticalFilter" onChange={handleFilter} value={filterLetter}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="J">J</option>
                <option value="K">K</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="N">N</option>
                <option value="O">O</option>
                <option value="P">P</option>
                <option value="Q">Q</option>
                <option value="R">R</option>
                <option value="S">S</option>
                <option value="T">T</option>
                <option value="U">U</option>
                <option value="V">V</option>
                <option value="W">W</option>
                <option value="X">X</option>
                <option value="Y">Y</option>
                <option value="Z">Z</option>
            </select>
            <h1>{title}</h1>
            <ul>
                {
                    filteredUsersByLetter.map((user) => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </>
    );
}

export default Users;