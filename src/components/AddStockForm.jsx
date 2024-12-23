import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { addStock } from '../redux/stockSlice';

const AddStockForm = () => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

   
    const dispatch = useDispatch();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); 

        
        const newStock = { id: Date.now(), name, price: parseFloat(price) };

      
        dispatch(addStock(newStock));

        // add neW stock `data.json` file
        fetch('/data.json', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStock), 
        })
        .then(() => {
           
        })
        .catch((err) => console.error('Error adding stock:', err));

        
        setName('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Stock Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Stock Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <button type="submit">Add Stock</button>
        </form>
    );
};

export default AddStockForm;
