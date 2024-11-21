
import './App.css';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import ParkingSpace from './components/ParkingSpace';
import Wallet from './components/Wallet';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Login></Login>
      <SignUp></SignUp>
      <ParkingSpace></ParkingSpace>
      <Wallet></Wallet>
      <Footer></Footer>
    </div>
  );
}

export default App;
