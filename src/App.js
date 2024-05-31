import React from 'react';
import Header from './component/Header/Header';
import './App.scss';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        test Link
        <div>
          <button>
            <Link to="/users">go to user page</Link>
          </button>
          <button>
            <Link to="/admins">go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App