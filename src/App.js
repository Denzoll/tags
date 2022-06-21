import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleSetText = (e) => {
    setText(e.target.value);
    if (e.target.value) {
      setIsEmpty(false);
      setError("");
      setMessage(true);
    }
    if (!e.target.value) {
      setIsEmpty(true);
      setMessage(false);
      setError("Поле ввода не должно быть пустым");
    }
  };
  const handleBlur = (e) => {
    if (!text) {
      setMessage(false);
      setError("Поле ввода не должно быть пустым");
    }
  };
  const handleSubmit = () => {
    setTodos([...todos, text]);
    
    setText("");
    setIsEmpty(true);
    setMessage(true);
  };
  const handleRemove = (e) =>{
    const arr = todos.filter((item,index) => {
    if(index=== e) {
      return false
    }
    return true
   })
   setTodos(arr)
  }

  return (
    <>
      <div className="container">
        <form onClick={(e) => e.preventDefault()}>
          <input
            type="text"
            value={text}
            onChange={handleSetText}
            onBlur={(e) => handleBlur(e)}
          ></input>
          <button
            onClick={(e) => handleSubmit()}
            type="submit"
            disabled={isEmpty}
          >
            Отправить
          </button>
        </form>
        {error && isEmpty && (
          <div className={!message ? "is-error" : null}>{error}</div>
        )}
        { (
          <div className="fottercont">
            {todos.map((item, index) => {
              return <div key={index} className='todos'>
                {item}  <button className="dealbtn" onClick={e => handleRemove(index)}>x</button></div>;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
