import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StockList from './components/StockList';
import AddStockForm from './components/AddStockForm';
import UpdateStockForm from './components/UpdateStockForm';
import './App.css';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <div className="section">
        <h2>Add New Stock</h2>
        <AddStockForm />
      </div>
      <div className="section">
        <StockList />
      </div>
      <div className="section">
        <h2>Update Stock</h2>
        <UpdateStockForm />
      </div>
    </div> 
    <Footer />
  </div>
);

export default App;
