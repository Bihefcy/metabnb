import Navbar from './Navbar';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Main from './Main'
import PlaceToStay from './PlaceToStay'

const Home = () => {
    return ( 
        <>
        <Navbar />
        <Routes>
            <Route index element={<Main />}></Route>
            <Route path="placetostay" element={<PlaceToStay />}></Route>
        </Routes>
        <Footer />
        </>
     );
}
 
export default Home;