import Provider from './context/Provider';
import TasksList from './components/TasksList';
import CreateTask from './components/CreateTask';

function App() {
  return (
    <Provider>
      <CreateTask />
      <TasksList />
    </Provider>
  );
}

export default App;
