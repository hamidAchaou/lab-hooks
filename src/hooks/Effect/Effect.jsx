import { useState, useEffect } from "react";

export default function Effect() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [inputValue, setinputValue] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                setUsers(data);
                setFilteredUsers(data); // Initialize filtered users with all users
            });
    }, []);

    useEffect(() => {
        if (users.length > 0) {
            console.log(users);
        }
    }, [users]);

    useEffect(() => {
        const filterUsers = users.filter(user => user.name.toLowerCase().includes(inputValue));
        setFilteredUsers(filterUsers);
    }, [inputValue])

    const handleChange = (e) => {
        setinputValue(e.target.value.toLowerCase());
    };

    return (
        <>
            <input type="text" onInput={handleChange} />
            {filteredUsers.map(user => <h3 key={user.id}>{user.name}</h3>)}
        </>
    );
}
