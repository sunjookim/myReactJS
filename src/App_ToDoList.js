import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // from 기본 기능에 의해 새로고침되는 것을 막아준다.
    if(toDo === "") {
      return; // toDo 값이 없다면 함수가 작동하지 않도록 한다.
    }

    // state는 직접적으로 수정하지 않는다. setToDo와 같은 함수를 통해서만 그 값을 수정할 수 있다.
    // ...currentArray를 통해 기존 배열을 불러와서 toDo를 추가해준다.
    // [toDo, currentArray]를 하면 배열 안에 배열을 불러오는 것임
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo(""); // 버튼을 누르면 input 값을 비운다.

  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}> {/* (바닐라JS) form은 기본적으로 submit 기능을 가지고 있어서, form 내부의 버튼을 클릭할 경우 새로고침이 된다. */}
        <input
          onChange={onChange}
          value={toDo} 
          type="text" 
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/* map은 array에 있는 item을 내가 원하는 값으로 바꿔준다. */}
      <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}
 
export default App;
