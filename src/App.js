import Profile from "./Profile";

function App() {
  return (
    <div className="App">
    <h1 style={{textAlign:"center", color:"orange"}}>Hello from App js</h1>

      <Profile  color="red" align="left"/>
      <Profile color="blue" align="center"/>
      <Profile color="navy" align="right"/>
    </div>
  );
}

export default App;
