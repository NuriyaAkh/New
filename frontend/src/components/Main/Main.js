/**
 * The **Main** component puts together the components of the main page
 */
import './Main.css';
import SearchForm from '../SearchForm/SearchForm'
const Main = () => {
  return <main className="main">
     <div className="main__container">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
<SearchForm/>
  </main>;
};
export default Main;
