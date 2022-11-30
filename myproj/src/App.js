
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <> 
  <Navbar title="TextUtils" about= "About TextUtils" homepage="Home" />
  <div className="container">
    <TextForm heading="Enter Your Text to Analyze:" />

  </div>
    </> 
  );
}

export default App;
