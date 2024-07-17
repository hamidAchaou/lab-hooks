import { useState, useEffect } from "react";

export default function Effect() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => setUsers(data));
    }, []);

    useEffect(() => {
        if (users.length > 0) {
            console.log(users);
        }
    }, [users]);

    const handleChange = (e) => {
        const filterUsers = users.filter(user => user.name.includes(e.target.value));
        console.log(filterUsers);
    };

    return (
        <>
            <input type="text" onInput={handleChange} />
            {users.map(user => <h3 key={user.id}>{user.name}</h3>)}
        </>
    );
}
