import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import About from './About';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home title='Welcome to Red30 Tech' />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/categories'
          element={<Categories />}
        />
      </Routes>

      <footer className='container'>
        &copy;2022 | <a href='https://red30techcom'>Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
