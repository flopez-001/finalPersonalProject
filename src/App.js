import './App.css';
import React from 'react';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewRecipie from './components/NewRecipie';
import RecipieView from './components/RecipieView';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route exact path='/home/' element={<Main />} />
        <Route exact path='/soups/recipe' element={<RecipieView />} />
        <Route exact path='/soups/new' element={<NewRecipie />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;