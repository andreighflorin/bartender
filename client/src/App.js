import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import OrderList from './components/OrderList'
import Form from './components/Form'
import NotFound from './components/NotFound'
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<OrderList/>} />
          <Route path="/add" element={<Form/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
