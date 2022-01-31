import './home.scss'
import { Navbar } from '../components/Navbar/Navbar';
import Featured from '../components/Featured/featured';
import List from '../components/list/List';
const Home = () => {
  return <div className="home" >
    <Navbar />
    <Featured />
    <List />
    <List />
    <List />
  </div>;
};

export default Home;
