import Provider from './context/Provider';
import TasksList from './components/TasksList';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Provider>
      <Header />
      <TasksList />
    </Provider>
  );
}

export default App;
