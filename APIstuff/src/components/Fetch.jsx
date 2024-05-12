import React, { useEffect, useState } from 'react';
import './Fetch.css'; 

const Fetch = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Network error occurred");
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {loading ? (
      <div className="loading-animation">
      <h2>loading..   </h2>
      <div className="spinner"></div>
    </div>
    ) : (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <a href={`mailto:${user.email}`} style={{ color: 'black', textDecoration:'underline' }}>{user.email}</a>
              </td>             
               <td>
                {user.address.suite}, {user.address.street},<br />
                {user.address.city}, {user.address.zipcode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }</>
  );
}
  
  

export default Fetch;
