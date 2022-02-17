import Provider from './context/Provider';
import TasksList from './components/TasksList';
import CreateTask from './components/CreateTask';
import Sorter from './components/Sorter';

function App() {
  return (
    <Provider>
      <CreateTask />
      <Sorter />
      <TasksList />
    </Provider>
  );
}

export default App;
