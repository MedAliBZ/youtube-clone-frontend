import React , {useState,setState}from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/Search/Search';

function App() {
  const [searchtxt, setSearchtxt] = useState('')

  function handlesearchtxt(txt) {
    setSearchtxt(txt)
  }

  return (
    <div>
      <Navbar searchtxt={handlesearchtxt}/>
      <Search q={searchtxt}/>
    </div>
  );
}

export default App;
