import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from 'Components/Nav';
import UserProfile from 'Pages/User';
import UsersListing from 'Pages/UsersListing';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
			<Nav />
      <Routes>
        <Route path="/user" element={<UserProfile />} />
        <Route path="/" element={<UsersListing />} />
      </Routes>
    </Router>
  );
}

export default App;
