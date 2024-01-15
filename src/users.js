import axios from "axios";
import { useEffect, useState } from "react";

function Users({ title, searchTitle }) {
    const [users, setUsers] = useState([])
    const [nameToSearch, setNameToSearch] = useState('')
    const [letterToFilter, setLetterToFilter] = useState('')

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .then(console.log(users))
            .catch((err) => console.error('Error fetching Data!', err))
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (e) => {
        const newName = e.target.value.toLowerCase()
        setNameToSearch(newName)
        if (newName.length > 0) {
            const searchedUsers = users.filter((user) => user.name.toLowerCase().includes(newName)) // تنقلت أخر 2 فانكشينز
            setUsers(searchedUsers)
        }
    }

    const handleFilter = (e) => {
        const filterLetter = e.target.value.toUpperCase()
        setLetterToFilter(filterLetter)
        if (filterLetter !== '') {
            const filteredUsers = users.filter((user) => user.name[0].toUpperCase().match(filterLetter))
            setUsers(filteredUsers)
        }
        console.log(filterLetter)
    }


    return (
        <>
            <label htmlFor='search'>
                {searchTitle}
                <input id='search' type='text' placeholder='Enter a name to search' onChange={handleSearch} value={nameToSearch} />
            </label>
            <label htmlFor="filter">
                Filter
            </label>
            <select id="filter" name="alphabeticalFilter" onChange={handleFilter} value={letterToFilter} >
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
                    users.map((user) => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </>
    );
}

export default Users;