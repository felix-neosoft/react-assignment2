import './App.css';
import List from './components/List';
import Form from './components/Form';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <h1 className="heading-h mt-5">React Assignment</h1>
      <h2 className="heading-h mb-5">Employee List</h2>
      <List />
      <hr />
      <h2 className="heading-h mb-5">Employee Form</h2>
      <Form />
      <hr/>
      <h2 className="heading-h mb-5">Delicious Delights</h2>
      <Products />
      <hr />
    </div>
  );
}

export default App;
