import { useState, useEffect } from "react";
import User from "./components/User";

export default function HomePage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json");
        const data = await response.json();
        setUsers(data);
    }

    return (
      <div className="page">
        <h1>Home page</h1>
        <p>This is the home page.</p>
        <section className="grid">
          {users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </section>
      </div>
    );
}
