import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskList({ tasks, onTaskDeleted }) {
    return (
        <Box sx={{ padding: 2, backgroundColor: '#e3f2fd', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
                Task List
            </Typography>
            <List>
                {tasks.map((task) => (
                    <ListItem
                        key={task.id}
                        sx={{ backgroundColor: '#b3e5fc', marginBottom: 1, borderRadius: 2 }}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => onTaskDeleted(task.id)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary={task.title}
                            secondary={`Duration: ${task.description || '0 minutes'}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
