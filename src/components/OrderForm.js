// components/OrderForm.js
import React, { useState } from 'react';

function OrderForm({ items, setItems, invoice, setInvoice }) {
  const [newItem, setNewItem] = useState({
    item: '',
    unit: 'pcs',
    qty: 1,
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.item && newItem.price && newItem.qty > 0) {
      const total = parseFloat(newItem.qty) * parseFloat(newItem.price);
      setItems([...items, { ...newItem, total }]);
      setNewItem({ item: '', unit: 'pcs', qty: 1, price: '' });
    }
  };

  return (
    <div className="card shadow">
      <div className="card-header rounded-0">
        <div className="card-title">Order Form</div>
      </div>
      <div className="card-body rounded-0">
        <div className="container-fluid">
          <div className="mb-3">
            <label htmlFor="invoice_code" className="form-label">Invoice Code</label>
            <input 
              type="text" 
              className="form-control rounded-0" 
              name="invoiceCode" 
              id="invoice_code" 
              required 
              value={invoice.invoiceCode}
              onChange={(e) => setInvoice({ ...invoice, invoiceCode: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="customer" className="form-label">Customer Name</label>
            <input 
              type="text" 
              className="form-control rounded-0" 
              name="customer" 
              id="customer" 
              required 
              value={invoice.customer}
              onChange={(e) => setInvoice({ ...invoice, customer: e.target.value })}
            />
          </div>
          <hr />
          <label className="form-label text-body-emphasis d-block text-center">Item Form</label>
          <div className="mb-3">
            <label htmlFor="item" className="form-label">Item</label>
            <input 
              type="text" 
              className="form-control rounded-0" 
              id="item"
              name="item"
              value={newItem.item}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control rounded-0" 
                  id="unit"
                  name="unit"
                  value={newItem.unit}
                  onChange={handleInputChange}
                />
                <label htmlFor="unit" className="form-label d-block text-center"><small>Unit</small></label>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input 
                  type="number" 
                  className="form-control rounded-0 text-center" 
                  id="qty"
                  name="qty"
                  value={newItem.qty}
                  onChange={handleInputChange}
                />
                <label htmlFor="qty" className="form-label d-block text-center"><small>QTY</small></label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input 
              type="number" 
              step="any" 
              className="form-control rounded-0 text-end" 
              id="price"
              name="price"
              value={newItem.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex justify-content-center w-100">
            <button className="btn btm-sm rounded btn-primary" type="button" onClick={handleAddItem}>
              <i className="far fa-plus-square"></i> Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
