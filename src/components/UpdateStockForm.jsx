import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { updateStock } from '../redux/stockSlice'; 

const UpdateStockForm = () => {
    
    const [selectedStockId, setSelectedStockId] = useState('');
    const [price, setPrice] = useState('');

    
    const stocks = useSelector((state) => state.stocks.stocks); 
    const dispatch = useDispatch(); 

 
    useEffect(() => {
        
        if (selectedStockId) {
            const stock = stocks.find((s) => s.id === parseInt(selectedStockId, 10));
            if (stock) setPrice(stock.price); 
        }
    }, [selectedStockId, stocks]);

    // Handler form submission
    const handleUpdate = (e) => {
        e.preventDefault(); 

        
        const updatedStock = {
            id: parseInt(selectedStockId, 10),
            name: stocks.find((s) => s.id === parseInt(selectedStockId, 10)).name, 
            price: parseFloat(price), // New price entered by user
        };

       
        dispatch(updateStock(updatedStock));

       
        fetch('/data.json', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedStock), 
        }).catch((err) => console.error(err)); 
    };

    return (
        <form onSubmit={handleUpdate}>
            {/* Dropdown to select a stock to update */}
            <select onChange={(e) => setSelectedStockId(e.target.value)} required>
                <option value="">Select a Stock</option>
                {/* Rendering all available stocks as options */}
                {stocks.map((stock) => (
                    <option key={stock.id} value={stock.id}>
                        {stock.name} {/* Displaying the stock name */}
                    </option>
                ))}
            </select>

            {/* Input field for the new price */}
            <input
                type="number"
                placeholder="New Price"
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                required
            />
            <button type="submit">Update Stock</button> {/* Button to submit the form */}
        </form>
    );
};

export default UpdateStockForm;
