import logo from '../assets/red30-tech-logo.png';

function App() {
  return (
    <div className='app'>
      <header className='container'>
        <img
          className='logo'
          src={logo}
          alt='Red30 tech logo'
          title='Red30 | Home'
        />
      </header>

      <footer className='container'>
        &copy;2022 | <a href='https://red30techcom'>Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
