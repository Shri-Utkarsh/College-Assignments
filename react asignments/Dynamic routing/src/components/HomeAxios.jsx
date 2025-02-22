import React from 'react';

const HomeAxios = () => {
    const getUsers = () => {
        //     fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err))
    
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => console.log(res))
          .catch((res) => console.log(err))
      };
    
      return (
        <div>
          <h2>List of user</h2>
          <button onClick={() => getUsers()}>Get Users</button>
        </div>
      );
}

export default HomeAxios;
