import '../styles/App.scss';
import Navigation from './Navigation';
import Cards from './Cards';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <div className='container'>
          <Cards />
          <SideBar />
        </div>
      </main>
      </div>
  );
}

export default App;
