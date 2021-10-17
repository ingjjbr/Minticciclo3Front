import './App.css';
import { BrowserRouter as  Route } from 'react-router-dom';
import TableUser from './pages/users/TableUsers';
function App() {
  return (

    <Route path='/pages/user/TableUsers'>
                    <TableUser />
                  </Route>
    
  );
}

export default App;
