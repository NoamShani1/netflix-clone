import './home.scss'
import { Navbar } from '../components/Navbar/Navbar';

const Home = () => {
  return <div className="home" >
    <Navbar />
    <img
     width='100%'
      src="http://www.skarbakka.com/wp-content/uploads/2019/09/Blue_Tree.jpg"
      alt=""
    />
  </div>;
};

export default Home;
