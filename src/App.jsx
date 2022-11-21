import { useRef, useState, useEffect } from "react";

function App() {
  // Primary use: using as a ref to a html element
  const inputRef = useRef(null);
  const inputRefOther = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // On uncontrolled inputs
  const idRef = useRef(1);

  const [names, setNames] = useState([
    { id: idRef.current++, name: "John" },
    { id: idRef.current++, name: "Jane" },
  ]);

  const onAddName = () => {
    setNames([...names, { id: idRef.current++, name: inputRef.current.value }]);
    inputRef.current.value = "";
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={onAddName}>Add Name</button>
      <input type="text" ref={inputRefOther} />
      <div>
        {names.map((name) => (
          <div key={name.name}>
            {name.id} - {name.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
