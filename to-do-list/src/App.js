import logo from './logo.svg';
import './App.css';
import './List/List'
import List from './List/List';
import CompletedList from './Completed-List/Completed-List'


function App() {
  return (
    <>
      <form>
        <lable>Item</lable>
        <input type = 'text'></input>
        <input type = 'submit'></input>
      </form>
      <List></List>
      <CompletedList></CompletedList>
    </>
   
  );
}

export default App;
