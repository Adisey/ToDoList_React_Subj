import { type } from './types';

export const uiActions ={
    startSpinning: () => {
        return {
            type: type.START_SPINNING,
        };
    },
    stopSpinning: () => {
        return {
            type: type.STOP_SPINNING,
        };
    },
    emitError: (error, meta = null) => {
        return {
            type:    type.EMIT_ERROR,
            payload: error,
            meta,
        };
    },
};
