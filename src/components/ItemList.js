// components/ItemList.js
import React, { useEffect } from 'react';

function ItemList({ items, setItems, invoice, setInvoice }) {
  useEffect(() => {
    calculateTotal();
  }, [items, invoice.discountPercentage, invoice.tenderedAmount]);

  const calculateTotal = () => {
    const totalAmount = items.reduce((sum, item) => sum + item.total, 0);
    const discountAmount = totalAmount * (invoice.discountPercentage / 100);
    const grandTotal = totalAmount - discountAmount;
    const change = invoice.tenderedAmount - grandTotal;

    setInvoice({
      ...invoice,
      totalAmount,
      discountAmount,
      change,
    });
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleSaveInvoice = async () => {
    // Replace with actual API call
    const response = await fetch('/api/save-invoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ invoice, items }),
    });
    const data = await response.json();
    if (data.success) {
      alert('Invoice saved successfully!');
      // Clear form or redirect to new invoice
    } else {
      alert('Error saving invoice');
    }
  };

  return (
    <div className="card shadow">
      <div className="card-header rounded-0">
        <div className="card-title">Item List</div>
      </div>
      <div className="card-body rounded-0">
        <div className="container-fluid">
          <div className="table-responsive">
            <table className="table table-hover table-bordered table-stripped" id="order-item-tbl">
              <thead>
                <tr className="bg-gradient bg-dark-subtle">
                  <th className="bg-transparent text-center border border-dark"></th>
                  <th className="bg-transparent text-center border border-dark">QTY</th>
                  <th className="bg-transparent text-center border border-dark">Unit</th>
                  <th className="bg-transparent text-center border border-dark">Item</th>
                  <th className="bg-transparent text-center border border-dark">Price</th>
                  <th className="bg-transparent text-center border border-dark">Total</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr className="noData">
                    <th className="text-center border-dark" colSpan="6">No Item Listed Yet</th>
                  </tr>
                ) : (
                  items.map((item, index) => (
                    <tr key={index} className="border-dark">
                      <td className="text-center border-dark">
                        <button type="button" className="remove-item btn btn-sm btn-danger rounded-0 p-1" onClick={() => handleRemoveItem(index)}>
                          <i className="fas fa-times"></i>
                        </button>
                      </td>
                      <td className="text-center border-dark">{item.qty}</td>
                      <td className="text-center border-dark">{item.unit}</td>
                      <td className="border-dark">{item.item}</td>
                      <td className="text-center border-dark">{parseFloat(item.price).toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      <td className="text-center border-dark">{item.total.toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    </tr>
                  ))
                )}
              </tbody>
              <tfoot>
                {/* Add tfoot rows for Sub-Total, Discount, Grand Total, Tendered Amount, and Change */}
              </tfoot>
            </table>
          </div>
          <div className="d-flex justify-content-center w-100 my-3">
            <button className="btn btm-sm rounded btn-primary" type="button" onClick={handleSaveInvoice}>
              <i className="fas fa-file-invoice"></i> Save & Generate Printable Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;