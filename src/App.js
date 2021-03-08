import './App.css';
import React, { useEffect, useState } from 'react';
import UserCardComponent from './components/UserCardComponent';
import SelectionComponent from './components/SelectionComponent';


function App() {

  const [data, setData] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [filterVal, setFilterVal] = useState('');
  const [sortVal, setSortVal] = useState('');

  useEffect(() => {
    getData();
  },[]);

  const getData = () => {
    fetch('MOCK_DATA.json'
    ,{
      headers :{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setData(data);
      setFiltered(data);
    })
  }

  return (
    <div className="App">
      <SelectionComponent data={data} setFilterVal={setFilterVal} setFiltered={setFiltered} setSortVal={setSortVal} filterVal={filterVal} sortVal={sortVal} filtered={filtered}/>
  
      <div className='userCards'>
          {filtered && filtered.map((user) => {
            return (
              <React.Fragment key={user.id}>
                <UserCardComponent user={user}/>
              </React.Fragment>
            )
          })}
      </div>
    </div>
  );
}

export default App;
