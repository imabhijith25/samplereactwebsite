
import './App.css';

import Featured from './featured';
import GraphicPrint from './graphicPrint';
import GridView from './gridView';
import Navbar from './navbar';
import Outlook from './outlook';
import FeedBack from "./feedback"
import MapView from './maps';
import Fashion from './fashion';
import Blog from './blog';
import Testimonials from './Testimonials';
import Insta from './instagram';
import Footer from './footer';
import Expander from './expander';

import Inspiration from './inspiration';
import NewExpand from './newexpander';


function App() {
  return (
    <div className="App">
      {/* <div className='mainContainer'>
   
      <div className="subContainer"> */}
        <Navbar></Navbar>
        <Outlook></Outlook>
        <GridView></GridView>
        <Featured></Featured>
        <GraphicPrint></GraphicPrint>
        <FeedBack></FeedBack>
        <MapView></MapView>
        <Fashion></Fashion>
        <Blog></Blog>
        <Testimonials></Testimonials>
        <Insta></Insta>
        <NewExpand></NewExpand>
        <Inspiration></Inspiration>
        <Footer></Footer>


     
    </div>
  );
}

export default App;
