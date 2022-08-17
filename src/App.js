import Navbar from './components/navbar/Navbar';
import CryptoHome from './components/cryptos/CryptoHome';
import Donate from './components/donate/Donate';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CryptoHome />
      <Donate />
    </div>
  );
}

export default App;
