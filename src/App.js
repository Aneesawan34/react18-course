import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <Todo
        title={"Special title treatment"}
        details={
          "With supporting text below as a natural lead-in to additional content"
        }
      />
      <br />
      <Todo
        title={"Special title treatment"}
        details={
          "With supporting text below as a natural lead-in to additional content"
        }
      />
    </div>
  );
}

export default App;
