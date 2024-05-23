import Carousel from '../../components/carousel';
import Navbar from '../../components/navbar';
import './styles.css';

function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Carousel></Carousel>
    </div>
  );
}

export default Home;
