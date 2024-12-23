import React, {useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { setStocks } from '../redux/stockSlice';

const StockList = () => {
    
    const stocks = useSelector((state) => state.stocks.stocks);
    const dispatch = useDispatch();

   
    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json()) 
            .then((data) => dispatch(setStocks(data))) // Update the Redux state with fetched data
            .catch((error) => console.error('Error fetching stock data:', error));
    }, [dispatch]);

    return (
        <div>
            <h2>Stock List</h2>
            <ul>
                {/* Render the list of stocks */}
                {stocks.map((stock) => (
                    <li key={stock.id}>
                        <h3>{stock.name}</h3>
                        <p>Price: {stock.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StockList;
