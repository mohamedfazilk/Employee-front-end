import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EmployeeList from './Components/EmployeeList';

function App() {
  return (
  <div className='App'>
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>
          Employee details
        </Typography>
      </Toolbar>
    </AppBar>
    <EmployeeList/>
  </div>
  );
}

export default App;
