import { type } from "./types";

// Instruments
// import { api } from '../../REST/';

export const tasksActions ={
    // Sync
    fillTasks: (tasks) => {
        return {
            type:    type.FILL_TASKS,
            payload: tasks,
        };
    },

    createTask: (task) => {
        return {
            type:    type.CREATE_TASK,
            payload: task,
        };
    },
    removeTask: (taskId) => {
        return {
            type:    type.REMOVE_TASK,
            payload: taskId,
        };

    },
    completeTask: (task) => {
        return {
            type:    type.COMPLETE_TASK,
            payload: task,
        };

    },
    startRunTask: (id) => {
        return {
            type:    type.START_RUN_TASK,
            payload: id,
        };

    },
    endRunTask: (id) => {
        return {
            type:    type.END_RUN_TASK,
            payload: id,
        };

    },

    // Async
    fetchTasksAsync: (tasks) => {
        return {
            type:    type.FETCH_TASKS_ASYNC,
            payload: tasks,
        };
    },
    createTaskAsync: (taskMessage) => {
        return {
            type:    type.CREATE_TASK_ASYNC,
            payload: taskMessage,
        };

    },
    removeTaskAsync: (taskId) => {
        return {
            type:    type.REMOVE_TASK_ASYNC,
            payload: taskId,
        };

    },
    completeTaskAsync: (task) => {
        return {
            type:    type.COMPLETE_TASK_ASYNC,
            payload: task,
        };

    },
};
