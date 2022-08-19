import Navbar from './navbar/Navbar';
import CryptoHome from './cryptos/CryptoHome';
import Donate from './donate/Donate';
import AuthState from '../context/AuthState';

function App() {
  return (
    <div className="App">
      <AuthState>
        <Navbar />
        <CryptoHome />
        <Donate />
      </AuthState>
    </div>
  );
}

export default App;
