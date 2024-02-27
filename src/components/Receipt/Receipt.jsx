import React, { useContext } from 'react';
import { TotalContext } from '../../App';
import items from '../../data';
import './Receipt-style.css';

const Receipt = () => {
    const { totalWorth } = useContext(TotalContext);
    const initialWorth = 100000000000; // Başlangıç değeri
    const spent = initialWorth - totalWorth; // Harcanan miktarı hesaplıyoruz

    // Satın alınan ürünleri filtrele
    const purchasedItems = items.filter(item => item.bought > 0);

    return (
        <div className='receipt-container'>
            <h2>Your Receipt</h2>
            <ul>
                {purchasedItems.map(item => (
                    <li key={item.id} className='receipt-item'>
                        {item.name} x {item.bought} = ${item.price * item.bought}
                    </li>
                ))}
            </ul>
            <p className='total-spent'>Total Spent: ${spent}</p>
        </div>
    );
};

export default Receipt;
