import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {selectPosts, increment, getPosts} from './app/posts/postsSlice'
import {useAppSelector, useAppDispatch} from './app/hooks'

function App() {
  const posts =useAppSelector(selectPosts) ;
  const dispatch : any = useAppDispatch();
  
  useEffect(() => {
    dispatch(increment())
    dispatch(getPosts())
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
