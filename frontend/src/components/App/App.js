import React ,{useState} from 'react';

import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import NewsCardList from '../NewsCardList/NewsCardList'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [showMore,setShowMore]=useState(false);
  const handleShowMore=()=>{
    console.log("more")
    setShowMore(!showMore)
  }
  const card ={
    name:"card name",
    link:"https://images.unsplash.com/photo-1673426680499-8763c390a5c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTc0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    date: "date",
    title:" card title",
    content:"This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know. You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.",
    source:"source"
  }
  return (
    <div className="page">
      <Router>
        <Header />
        <Main />
        <NewsCardList card={card} onCardSave={()=>console.log("save")} onCardClick={()=>console.log("card click") } handleShowMore={handleShowMore}
      />
        <About />
        <Footer />

      </Router>

    </div>
  );
};
export default App;
