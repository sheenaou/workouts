import {
    ADD_ARTICLE,
    REMOVE_ARTICLE,
    UPDATE,
    UPDATE_EXERCISE_TIME,
    UPDATE_REPS_COUNT,
    UPDATE_REST_TIME,
    UPDATE_SETS_COUNT,
    UPDATE_COMPLETE_STATUS,
    UPDATE_INACTIVE_STATUS,
    UPDATE_PENDING_STATUS,
    STATUS, RESET_APPLICATION
} from "./actionTypes";

export type STRING_DATA = { value: string }
export type NUMBER_DATA = { value: number }
export type STATUS_DATA = { value: STATUS }

const COUNTDOWN_ACTIONS =
    ADD_ARTICLE ||
    REMOVE_ARTICLE ||
    RESET_APPLICATION ||
    UPDATE ||
    UPDATE_EXERCISE_TIME ||
    UPDATE_REPS_COUNT ||
    UPDATE_REST_TIME ||
    UPDATE_SETS_COUNT ||
    UPDATE_COMPLETE_STATUS ||
    UPDATE_PENDING_STATUS ||
    UPDATE_INACTIVE_STATUS
;

export type CountdownAction = {
    type: typeof COUNTDOWN_ACTIONS
    data: STRING_DATA | NUMBER_DATA | STATUS_DATA
}

export function updateTextAction(text: string): CountdownAction {
    return {
        type: UPDATE,
        data: {
            value: text
        }
    };
}

export function updateExerciseTime(value: number): CountdownAction {
    return {
        type: UPDATE_EXERCISE_TIME,
        data: {
            value: value
        }
    };
}

export function updateRestTime(value: number): CountdownAction {
    return {
        type: UPDATE_REST_TIME,
        data: {
            value: value
        }
    };
}

export function updateReps(value: number): CountdownAction {
    return {
        type: UPDATE_REPS_COUNT,
        data: {
            value: value
        }
    };
}

export function updateSets(value: number): CountdownAction {
    return {
        type: UPDATE_SETS_COUNT,
        data: {
            value: value
        }
    };
}

export function setStatusComplete(): CountdownAction {
    return {
        type: UPDATE_COMPLETE_STATUS,
        data: {
            value: STATUS.COMPLETE
        }
    }
}

export function setStatusPending(): CountdownAction {
    return {
        type: UPDATE_PENDING_STATUS,
        data: {
            value: STATUS.PENDING
        }
    }
}

export function setStatusInactive(): CountdownAction {
    return {
        type: UPDATE_INACTIVE_STATUS,
        data: {
            value: STATUS.INACTIVE
        }
    }
}

export function resetApplication(): CountdownAction {
    return {
        type: RESET_APPLICATION,
        data: {
            value: ''
        }
    }
}
