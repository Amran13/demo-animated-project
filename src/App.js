import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Ques from './Components/Question/Ques';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Ques></Ques>
      <Contact></Contact>
      
    </div>
  );
}

export default App;
