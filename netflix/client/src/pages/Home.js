import './home.scss'
import { Navbar } from '../components/Navbar/Navbar';
import Featured from '../components/Featured/featured';
const Home = () => {
  return <div className="home" >
    <Navbar />
    <Featured />
  </div>;
};

export default Home;
