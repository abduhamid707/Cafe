import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import "./App.css"
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
// import Promotion from './page/Promotions/Promotion';
import PromotionDetail from './components/PromotionDetail/PromotionDetail';
import Menu from './page/Menu/Menu';
// import VacancyDetail from './components/VacancyDetails/VacancyDetail';
// import Vacancies from './page/Vacancies/Vacancies';
import Thoughts from './page/Thoughts/Thoughts';
import Ads from './page/Ads/Ads';
import Promotion from './page/Promotions/Promotion';
// import Ads from './page/Ads/Ads';
// import AnimatedComponent from './components/AnimatedComponent/AnimatedComponent';

 const App = () => {
  return (
    <div className="sm-wrapper">
        {/* <div style={{ padding: '50px' }}>
            <h1>Framer Motion Animatsiya Misoli</h1>
            <AnimatedComponent />
        </div> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/promotions" element={<Promotion />} />
        <Route path="/promotion/:id" element={<PromotionDetail />} />
        {/* <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/vacancy/:id" element={<VacancyDetail />} /> */}
        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;