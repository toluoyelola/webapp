import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {
      // action.payload will be the task object
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      // action.payload will be the task ID
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTaskStatus: (state, action) => {
      // action.payload: { id, newStatus }
      const { id, newStatus } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        existingTask.status = newStatus;
      }
    }
  }
});

export const { addTask, deleteTask, updateTaskStatus } = boardSlice.actions;
export default boardSlice.reducer;