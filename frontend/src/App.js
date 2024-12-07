import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { fetchTasks, deleteTask } from './api';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await fetchTasks();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        loadTasks();
    }, []);

    const handleTaskAdded = (newTask) => {
        setTasks((prev) => [...prev, newTask]);
    };

    const handleTaskDeleted = async (taskId) => {
        try {
            await deleteTask(taskId);
            setTasks((prev) => prev.filter((task) => task.id !== taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <Container maxWidth="md" sx={{ padding: 2, backgroundColor: '#e0f7fa', borderRadius: 2, marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                Employee Task Manager
            </Typography>
            <AddTask onTaskAdded={handleTaskAdded} />
            <TaskList tasks={tasks} onTaskDeleted={handleTaskDeleted} />
        </Container>
    );
}

export default App;
