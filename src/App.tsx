import { useEffect } from 'react';
import HomeTwo from './components/homes/home-2';
import AOS from 'aos';

function App() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <HomeTwo />;
}

export default App;
