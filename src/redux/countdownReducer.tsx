import { CountdownAction } from "./actions";
import {
    RESET_APPLICATION,
    STATUS,
    UPDATE,
    UPDATE_COMPLETE_STATUS, UPDATE_EXERCISE_TIME,
    UPDATE_INACTIVE_STATUS,
    UPDATE_PENDING_STATUS, UPDATE_REPS_COUNT, UPDATE_REST_TIME,
    UPDATE_SETS_COUNT
} from "./actionTypes";

type CountdownState = {
    status: STATUS,
    restTime: number,
    exerciseTime: number,
    sets: number,
    reps: number,
    text: string,
    foo: string
}

export const initialState: CountdownState = {
    status: STATUS.INACTIVE,
    restTime: 210,
    exerciseTime: 210,
    sets: 0,
    reps: 0,
    text: 'initial',
    foo: 'testing',
};

export function countdownReducer(
    state: CountdownState = initialState,
    action: CountdownAction
){
    switch(action.type) {
        case UPDATE:
            return {
                ...state,
                text: action.data.value,
                foo: action.data.value
            };
        case UPDATE_INACTIVE_STATUS:
            return {
                ...state,
                status: STATUS.INACTIVE
            };
        case UPDATE_COMPLETE_STATUS:
            return {
                ...state,
                status: STATUS.COMPLETE
            };
        case UPDATE_PENDING_STATUS:
            return {
                ...state,
                status: STATUS.PENDING
            };
        case UPDATE_SETS_COUNT:
            return {
                ...state,
                sets: action.data.value
            };
        case UPDATE_REPS_COUNT:
            return {
                ...state,
                reps: action.data.value
            };
        case UPDATE_REST_TIME:
            return {
                ...state,
                restTime: action.data.value
            };
        case UPDATE_EXERCISE_TIME:
            return {
                ...state,
                exerciseTime: action.data.value
            };
        case RESET_APPLICATION:
            return initialState;
        default:
            return state;
    }
}
