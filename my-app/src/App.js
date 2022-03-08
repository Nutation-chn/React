
import Todo from "./components/Todo";
import useState from  'react';
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn React2" />
    </div>
  );
}
export default App;
