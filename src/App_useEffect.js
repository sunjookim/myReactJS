import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };


  /* useEffect를 사용해서 해당 코드를 state가 업데이트 될 때마다 매번 렌더링 하지 않고 1번만 렌더링하게 해준다. */
  useEffect(() => {
    console.log("I run only once.")
  }, []); // 2번째 인자값으로 빈 array를 주었기 때문에 최초 1회만 실행된다.

  useEffect(() => {
    // if(keyword !== "" && keyword.length > 5) { // keyword에 입력된 값이 6글자 이상일 때
    //   console.log("SEARCH FOR", keyword);
    // }
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // keyword가 변화할 때만 업데이트를 하라는 뜻

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter change.");
  }, [keyword, counter]); // 2개 이상을 적을 수 있다. 둘 중 하나라도 변경되면 실행함

  
  return (
    <div>
      {/* <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} /> */}
      <input
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
 
export default App;
