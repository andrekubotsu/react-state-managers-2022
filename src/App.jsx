import { useState, useMemo, useCallback } from "react";

function SortedList({ list, sortFunction }) {
  console.log("Running render");

  const sortedList = useMemo(() => {
    console.log("Running sort");
    return [...list].sort(sortFunction);
  }, [list, sortFunction]);

  return <div>{sortedList.join(", ")}</div>;
}

function App() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const countTotal = useMemo(() => count1 + count2, [count1, count2]);

  // we use useCallback when the function is being passaed as a prop!
  const sortFunction = useCallback((a, b) => a.localeCompare(b), []);

  return (
    <>
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFunction={sortFunction} />
      <button onClick={() => setCount1(count1 + 1)}>Count 1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count 2: {count2}</button>
      <div>Total: {countTotal}</div>
    </>
  );
}

export default App;
