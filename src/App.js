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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;


