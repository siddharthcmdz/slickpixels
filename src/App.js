// import logo from './logo.svg';
import './App.css';
import SpHeader from './components/SpHeader';
import SpBody from './components/SpBody';
import SpFooter from './components/SpFooter';

function App() {
  return (
    <div className="App">
      <div className="root">
        <div className="leftroot"></div>
        <div className="middleroot">
          <SpHeader></SpHeader>
          <SpBody></SpBody>
          <SpFooter></SpFooter>
        </div>
        <div className="rightroot"></div>
      </div>
    </div>
  );
}


export default App;


