import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true); // loading을 위한 state
  const [coins, setCoins] = useState([]);

  // useEffect를 사용하고 두 번째 인자값으로 디폴트[]를 선언해서 최초 1회만 실행되도록 한다.
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") // coin 리스트 주소
      .then((response) => response.json())        // coin 리스트를 json으로 받아온다.
      .then((json) => {
        setCoins(json); // 받아온 coin 리스트를 coins에 넣는다.
        setLoading(false);
      });            
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (<strong>Loading...</strong>) : (
        <select>
        {coins.map((coin) => ( // coins 배열에 들어있는 각각의 coin
          <option>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>        
      )}
    </div>
  );
}
 
export default App;
