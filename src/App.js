import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import RegisterForm from './components/RegisterForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
 
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/register" element={<RegisterForm/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
