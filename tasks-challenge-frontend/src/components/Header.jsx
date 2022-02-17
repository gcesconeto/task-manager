import React from 'react';
import CreateTask from './CreateTask';
import Sorter from './Sorter';

function Header() {
    return (
        <div className="header">
            <div className="page-title">Task Manager</div>
            <CreateTask />
            <Sorter />
        </div>
    );
}

export default Header;
