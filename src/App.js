import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import './App.css';

const App = () => {
  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Jenny Han",
  //     email: "jenny@not.fake.com",
  //     age: 56
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Paul Jones",
  //     email: "paulPaul@not.fake.com",
  //     age: 44
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Heinrich Mahomes",
  //     email: "heinrich@not.fake.com",
  //     age: 23
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Tom Brady",
  //     email: "tommyB@not.fake.com",
  //     age: 30
  //   }
  // ];

  const [results, setResults] = useState([])
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => {
        setResults(data.results)
      });
  }, [])



  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age} />
        )
      })}
    </div>
  );
}

export default App;
