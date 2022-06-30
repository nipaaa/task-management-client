
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ToDo from './components/ToDo';
import CompletedTask from './components/CompletedTask';
import Calender from './components/Calender';

function App() {
  return (
    <div>
        <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="to-do" element={<ToDo />} />
        <Route path="completed-task" element={<CompletedTask />} />
        <Route path="calender" element={<Calender />} />
      </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
