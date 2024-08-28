import React, { useState, useEffect } from 'react';
import '../styles/inv.css';

const Invoice = () => {
    const [cashier, setCashier] = useState('');
    const [items, setItems] = useState([]);
    const [invoiceCode, setInvoiceCode] = useState('');
    const [customer, setCustomer] = useState('');
    const [item, setItem] = useState('');
    const [unit, setUnit] = useState('pcs');
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [tenderedAmount, setTenderedAmount] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [change, setChange] = useState(0);

    useEffect(() => {
        calculateTotals();
    }, [items, discountPercentage, tenderedAmount]);

    const addItem = () => {
        const newItem = { item, unit, qty, price };
        setItems([...items, newItem]);
        setItem('');
        setUnit('pcs');
        setQty(1);
        setPrice(0);
    };

    const calculateTotals = () => {
        const totalItemPrice = items.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
        const discount = (totalItemPrice * discountPercentage) / 100;
        const newGrandTotal = totalItemPrice - discount;
        const newChange = tenderedAmount - newGrandTotal;

        setSubTotal(totalItemPrice);
        setGrandTotal(newGrandTotal);
        setChange(newChange);
    };

    const handleSubmit = () => {
        const invoiceData = {
            cashier,
            invoice_code: invoiceCode,
            customer,
            items,
            discount_percentage: discountPercentage,
            tendered_amount: tenderedAmount,
        };

        fetch('http://localhost/fatoura2/invoice.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invoiceData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert('Invoice saved successfully!');
            } else {
                alert('Failed to save invoice: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error saving invoice:', error);
            alert('An error occurred while saving the invoice.');
        });
    };

    return (
        <div className="container">
            <form id="order-form">
                <input type="hidden" name="cashier" value={cashier} />
                <input type="hidden" name="total_amount" value={subTotal} />
                <input type="hidden" name="discount_amount" value={discountPercentage} />
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <div className="card-header">
                                <h2>Order Form</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="invoice_code">Invoice Code</label>
                                    <input type="text" id="invoice_code" value={invoiceCode} onChange={(e) => setInvoiceCode(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="customer">Customer Name</label>
                                    <input type="text" id="customer" value={customer} onChange={(e) => setCustomer(e.target.value)} required />
                                </div>
                                <hr />
                                <h3>Item Form</h3>
                                <div className="form-group">
                                    <label htmlFor="item">Item</label>
                                    <input type="text" id="item" value={item} onChange={(e) => setItem(e.target.value)} />
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="unit">Unit</label>
                                        <input type="text" id="unit" value={unit} onChange={(e) => setUnit(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="qty">QTY</label>
                                        <input type="number" id="qty" value={qty} onChange={(e) => setQty(parseInt(e.target.value))} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <input type="number" step="any" id="price" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
                                </div>
                                <div className="form-group text-center">
                                    <button type="button" id="add_item" onClick={addItem}>Add Item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-header">
                                <h2>Item List</h2>
                            </div>
                            <div className="card-body">
                                <table id="order-item-tbl">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>QTY</th>
                                            <th>Unit</th>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.length === 0 ? (
                                            <tr className="noData">
                                                <td colSpan="6">No Item Listed Yet</td>
                                            </tr>
                                        ) : (
                                            items.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <button onClick={() => setItems(items.filter((_, i) => i !== index))}>Delete</button>
                                                    </td>
                                                    <td>{item.qty}</td>
                                                    <td>{item.unit}</td>
                                                    <td>{item.item}</td>
                                                    <td>{item.price.toFixed(2)}</td>
                                                    <td>{(item.price * item.qty).toFixed(2)}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5">Sub-Total</td>
                                            <td>{subTotal.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="5">Discount Percentage</td>
                                            <td>
                                                <input type="number" value={discountPercentage} onChange={(e) => setDiscountPercentage(parseFloat(e.target.value))} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="5">Grand Total</td>
                                            <td>{grandTotal.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="5">Tendered Amount</td>
                                            <td>
                                                <input type="number" value={tenderedAmount} onChange={(e) => setTenderedAmount(parseFloat(e.target.value))} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="5">Change</td>
                                            <td>{change.toFixed(2)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="card-footer">
                                <button type="button" onClick={handleSubmit}>Save Invoice</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Invoice;
