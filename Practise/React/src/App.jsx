import "./App.css";

const App = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date=new Date().toISOString()
  return (
    <h1 className="container"> {timezone}-{date}</h1>
  );
};

export default App;
