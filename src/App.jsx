import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        return t + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Time: {time}</div>;
};

function App() {
  const [names, setNames] = useState([]);

  // for api requests
  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedName = (name) => {
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <div>
      <Stopwatch />
      <div>
        {names.map((name) => {
          return (
            <button
              onClick={() => {
                onSelectedName(name);
              }}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
}

export default App;
