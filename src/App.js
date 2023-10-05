// import logo from './logo.svg';
import './App.css';
import Navv from './Component/NavBar.js'
import High from './Component/Highlight'
import Team from './Component/Team';
import ShieldIcon from './Component/ShieldIcon';
import Testimonials from './Component/Testimonials'
import Display from './Component/Display.js'
import data from './Component/data/data.json'
import React, { BrowserRouter, Route, Router } from 'react-router-dom'
import FandQ from './Component/FandQ';
import News from './Component/News.js'
import Footer from './Component/Footer.js'
 

function App() {


  let obj1 = [
    {
      id: 1,
      date: "20 Oct 2023",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"
    },
    {
      id: 2,
      date: "20 Oct 2023",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"
    },

    {
      id: 3,
      date: "20 Oct 2023",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"
    },
    {
      id: 4,
      date: "20 Oct 2023",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"
    },

  ]


  let obj2 = [

    {
      id: 1,
      title: "Safe & Secure",
      // logo:'FaShieldVirus ',
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"

    },
    {
      id: 2,
      title: "Safe & Secure",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"

    },

    {
      id: 3,
      title: "Safe & Secure",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"

    },

    {
      id: 4,
      title: "Safe & Secure",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"

    },

    {
      id: 5,
      title: "Safe & Secure",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"

    },

    {
      id: 6,
      title: "Safe & Secure",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"

    },



  ]

  let obj3 = [

    {

      title: "Matt Henry",
      desg: "Director"
      , img: require('./img/i1.jpg'),
    },
    {

      title: "Matt Henry",
      desg: "Director"
      , img: require('./img/i2.jpg'),
    },
    {

      title: "Matt Henry",
      desg: "Director"
      , img: require('./img/i3.jpg'),
    },
    {

      title: "Matt Henry",
      desg: "Director"
      , img: require('./img/i4.jpg'),
    },


  ]

  let obj4 = [

    {

      title: "Matt Henry",
      desg: "Director"
      , img: require('./img/i1.jpg'),

      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"

    },
    {

      title: "Matt Henry",
      desg: "Director"
      , img: require('./img/i2.jpg'),
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"

    },
    {

      title: "Matt Henry",
      desg: "Director"
      , img: require('./img/i3.jpg'),
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"

    },
    {

      title: "Matt Henry",
      desg: "Director",
      img: require('./img/i4.jpg'),
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"

    },
  ]


  let obj5= [
    {
      img: require('./img/i4.jpg'),
      title: "Made a Joy Full Life",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"


    },
    {
      img: require('./img/i4.jpg'),
      title: "Made a Joy Full Life",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"


    }
    , {
      img: require('./img/i4.jpg'),
      title: "Made a Joy Full Life",
      para: "Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s"


    }

  ]

  return (

    <>
      {/* <BrowserRouter/> */}

      <Navv />

      {/* <Route exact path='/' element={High}/> */}

      {/* <Route exact path='/feature' component={ShieldIcon}/> */}
      
      
      <High obj={obj1} />
      <ShieldIcon prop={obj2} />
      <Team obj={obj3} />
      <Testimonials obj={obj4} />
      <Display />
      <FandQ />
      <News obj={obj5} />
      <Footer/> 


      {/* <BrowserRouter/> */}
    </>

  );
}

export default App;
