import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { string } from 'prop-types';

function TaskCard({ task, status, createdAt }) {
  const { setUpdatedTask } = useContext(AppContext);

  const statusList = ['pending', 'in progress', 'done'];

  return (
      <div>
        <span>{ task }</span>
        <span>{ createdAt }</span>
        <form>
            <select
                id="status-select"
                value={ status }
                onChange={ (event) => setUpdatedTask({
                    status: event.target.value,
                    task,
                    createdAt,
                }) 
                }
            >
                {
                    statusList.map((option, index) => (
                        <option key={ index } value={ option }>{option}</option>
                        ))
                }
            </select>
        </form>
      </div>
  );
}

TaskCard.propTypes = {
  task: string.isRequired,
  status: string.isRequired,
  createdAt: string.isRequired,
};

export default TaskCard;
