import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskList({ tasks, onTaskStatusToggled, onTaskDeleted }) {
    return (
        <Box sx={{ padding: 2, backgroundColor: '#e3f2fd', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
                Task List
            </Typography>
            <List>
                {tasks.map((task) => (
                    <ListItem
                        key={task.id}
                        sx={{
                            backgroundColor: '#b3e5fc',
                            marginBottom: 1,
                            borderRadius: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <ListItemText
                            primary={task.title}
                            secondary={
                                <>
                                    <Typography variant="body2">
                                        Duration: {task.description || '0 minutes'}
                                    </Typography>
                                    <Typography variant="body2">
                                        Status: {task.status}
                                    </Typography>
                                </>
                            }
                        />
                        <Box>
                            {/* Кнопка выполнения/отмены */}
                            <IconButton
                                edge="end"
                                aria-label="toggle-status"
                                onClick={() => onTaskStatusToggled(task.id)}
                            >
                                {task.status === 'completed' ? <UndoIcon /> : <DoneIcon />}
                            </IconButton>
                            {/* Кнопка удаления */}
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => onTaskDeleted(task.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
