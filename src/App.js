import Header from './component/Header/Header';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';  
import {Link} from 'react-router-dom';
const App = () => {

  return (
    <Router>
    <div className="app-container">
      <Header />
      <div>
        test Link
        <div>
          <button>
            <Link to ="/users">go to user page</Link>
            
            </button>
          <button>
            <Link to ="/admins">go to admin page</Link>
            
            </button>
        </div>
      </div>
    </div>
    </Router>
  );
}
export default App;
