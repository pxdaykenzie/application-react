import "./App.css";

function App() {
  const users = [
    { name: "Randy Cox", id: 1 },
    { name: "Cody Thaller", id: 2 },
    { name: "Michelle Hoelzer", id: 3 },
  ];

  const userNames = users.map(({ name, id }) => <li key={id}>{name}</li>);

  return (
    <div>
      <h1>User names</h1>
      <ul>{userNames}</ul>
    </div>
  );
}

export default App;
