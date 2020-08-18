import React , {useState,setState}from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/Search/Search';

function App() {
  const [searchtxt, setSearchtxt] = useState('tst')

  function handlesearchtxt(txt) {
    setSearchtxt(txt)
  }

  return (
    <div>
      <Navbar searchtxt={handlesearchtxt}/>
      <Search/>
    </div>
  );
}

export default App;
