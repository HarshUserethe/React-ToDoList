 import '../App.css';
 import AssignmentIcon from '@mui/icons-material/Assignment';

const Header = () => {
  return (
    <div className="heading">
      <div className="wrapper">
      <AssignmentIcon style={{color:"green"}}/><h5>TaskMate</h5>
      </div>
    </div>
  )
}

export default Header