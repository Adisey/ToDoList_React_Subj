import { type } from "./types";

// Instruments
// import { api } from '../../REST/';

export const testActions ={
    // Sync
    test: (test) => {
        return {
            type:    type.TEST,
            payload: test,
        };
    },
    // Async
    testAsync: (test) => {
        return {
            type:    type.TEST_ASYNC,
            payload: test,
        };
    },
};
