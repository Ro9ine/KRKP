import React, { useState } from 'react';
import { addTask } from '../api';
import { Box, TextField, Button } from '@mui/material';

export default function AddTask({ onTaskAdded }) {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Устанавливаем значение duration по умолчанию, если оно пустое
        const durationValue = duration.trim() === '' ? '0' : duration;
    
        const newTask = {
            title,
            description: `${durationValue} minutes`, // Используем обработанное значение
            hours_spent: 0,
            status: 'in progress',
            start_time: new Date().toISOString(),
            end_time: new Date().toISOString(),
            assigned_to: 1,
        };
    
        try {
            const addedTask = await addTask(newTask);
            onTaskAdded(addedTask); // Передаем добавленную задачу в родительский компонент
            setTitle('');
            setDuration('');
        } catch (error) {
            console.error('Failed to add task:', error);
        }
    };
    

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ padding: 2, backgroundColor: '#e8f5e9', borderRadius: 2, marginTop: 2 }}
        >
            <TextField
                label="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Duration (minutes)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                type="number"
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
                Add Task
            </Button>
        </Box>
    );
}
