// Core
import { object, string } from 'yup';
// Instruments

const required  = 'Описание задачи не может быть пустым!';
const min5      =  'Описание задачи не может меньше 5-ти символов!';
const max50     =  'Описание задачи не может быть более 50 символов!';

export const newTask = {
    shape: {
        message: 'Task',
    },
    schema: object().shape({
        message: string()
            .required(required)
            .min(5, min5)
            .max(50, max50),
    }),
};
