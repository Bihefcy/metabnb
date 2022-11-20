import './App.css';
import  {Routes, Route}  from 'react-router-dom';
import Home from './Home';
import PlaceToStay from './PlaceToStay';

function App() {
  return (
    <div className="App">
            <Routes>
            <Route path="/" element={<Home />}/>
                <Route path="home" element={<Home />}>
                  <Route path='placetostay' element={<PlaceToStay />}></Route>
                </Route>
            </Routes>
    </div>
  );
}

export default App;
