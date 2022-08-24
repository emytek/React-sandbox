import React from 'react'
import { useState, useEffect } from 'react';
import AddCalc from './AddCalc'
import TestData from '../data/TestData';
import axios from 'axios'

// Make a request for a user with a given ID
const fetchData = () => {
  axios.get('https://my-json-server.typicode.com/emytek/mockdata/posts')
    .then((res) => {
      // handle success
      console.log(res);
    })
    .catch((err) => {
      // handle error
      console.error(err);
    })
}

function Child({ setView }) {
  const [data, setData] = useState(TestData);

  // const userData = async() => {
  //     const response = await fetch(url)
  //     const jsonData = await response.json()
  //     setData(jsonData)
  // }

  // useEffect(() => {
  //     userData()
  // },[])
  const listItems = TestData.map((item) => <li key={item.id}>{item.rating}: {item.text}</li>)
  return (
    <div>
      <h4>{listItems}</h4>
      <h3>Waiting to update parent...</h3>
      <button onClick={() => setView("The parent has been updated")}>Click to update</button>
      <button onClick={fetchData()}>Fetch API</button>

      <AddCalc />
    </div>
  )
}

export default Child