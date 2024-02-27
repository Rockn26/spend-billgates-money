import React, { useContext, useState } from "react"; // useState'i import ettik
import data from "../../data";
import { TotalContext } from "../../App";
import "./Page-style.css";


const Page = () => {
  let { totalWorth, setTotalWorth } = useContext(TotalContext);

  return (
    <div className="page-content">
      {data.map((item) => {
        const [count, setCount] = useState(0); // Her bir öğe için kendi count state'ini tanımlıyoruz

        function handleBuy() {
          setCount(count + 1);
          setTotalWorth(totalWorth - item.price);

        }

        function handleSell() {
          if (count > 0) {
            // Satış işlemi için count kontrolü
            setCount(count - 1);
            setTotalWorth(totalWorth + item.price);
          }
        }

        function handleChange(e) {
          // input değiştiğinde count state'ini güncellemek için
          setCount(e.target.value);
          const newValue = parseInt(e.target.value, 10) || 0; 
          if (newValue <= count || (newValue > count && totalWorth >= item.price * (newValue - count))) { // Eğer yeni değer eski değerden küçükse veya yeni değer eski değerden büyükse ve toplam değer yeterliyse
            setCount(newValue);
            setTotalWorth(totalWorth - item.price * (newValue - count)); // Yeni değer eski değerden büyükse, fark kadar para düşüyor
          }

        }
        

        // map fonksiyonunun içindeki return ifadesi, her bir öğe için JSX döndürmeli
        return (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div className="buttons">
              <button className="button" onClick={handleSell}>
                Sell
              </button>
              <input type="text" className="input" value={count} onChange={handleChange} />
              <button onClick={handleBuy} disabled={totalWorth < item.price}>Buy</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
