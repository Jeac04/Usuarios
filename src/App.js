import './App.css';
import ListUsers from './components/ListUsers';
import UserState from './context/UserState';
import FormUser from '../src/components/FormUser';

function App() {
  return (
   <>
   <UserState>
   <FormUser />
    <ListUsers />
   </UserState>
    
   </>
  );
}

export default App;
