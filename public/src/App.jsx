import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Home from './components/Home'
import Product from './components/Prodeuct'
import ProductDatail from './components/ProductDatail'
import Hero from './components/Hero'


function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/products" element= {<Product/>}/>
        <Route path="/products/:id" element={<ProductDatail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
