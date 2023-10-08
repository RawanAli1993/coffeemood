import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import Appservices from './components/services';
import Appworks from './components/works';
import AppTeam from './components/team';
import AppReview from './components/review';
import AppPrice from './components/pricing';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';




function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader/>

      </header>
      <main>
        <AppHero />
        <AppAbout />
        <Appservices/>
        <Appworks />
        <AppTeam />
        <AppReview />
        <AppPrice />
        <AppBlog/>
        <AppContact />
       
      </main>
      <footer id='footer'>
      <AppFooter/>
      </footer>
    </div>
  );
}

export default App;
