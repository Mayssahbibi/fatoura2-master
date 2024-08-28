// components/Home.js
import React, { useState } from 'react';
import OrderForm from './OrderForm';
import ItemList from './ItemList';

function Home({ user }) {
  const [items, setItems] = useState([]);
  const [invoice, setInvoice] = useState({
    invoiceCode: '',
    customer: '',
    cashier: user,
    totalAmount: 0,
    discountPercentage: 0,
    discountAmount: 0,
    tenderedAmount: 0,
  });

  return (
    <div className="container-md py-3">
      <div className="row">
        <div className="col-lg-4 col-md-5 col-sm-12 col-12">
          <OrderForm 
            items={items} 
            setItems={setItems} 
            invoice={invoice} 
            setInvoice={setInvoice} 
          />
        </div>
        <div className="col-lg-8 col-md-7 col-sm-12 col-12">
          <ItemList 
            items={items} 
            setItems={setItems} 
            invoice={invoice} 
            setInvoice={setInvoice} 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;