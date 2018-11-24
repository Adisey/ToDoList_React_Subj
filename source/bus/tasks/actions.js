import { type } from "./types";

export const tasksActions ={
    // Sync
    fillTasks: (tasks) => {
        return {
            type:    type.FILL_TASKS,
            payload: tasks,
        };
    },
    makeOrderList: () => {
        return {
            type:    type.MAKE_ORDER_LIST,
        };
    },

    newOrderList: (orderList) => {
        return {
            type:    type.NEW_ORDER_LIST,
            payload: orderList,
        };
    },

    newTask: () => {
        return {
            type:    type.NEW_TASK,
        };
    },

    cancelNewTask: () => {
        return {
            type:    type.CANCEL_NEW_TASK,
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
    endRunTask: () => {
        return {
            type:    type.END_RUN_TASK,
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
