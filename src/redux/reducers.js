import { statusFilters } from "./constants";
const initialState = {
    tasks: [],
    filters: {
        status: statusFilters.all,
    },
};
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "tasks/addTask": {
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload,
                ],
            };
        }
        case "tasks/deleteTask": {
            return {
                ...state,
                tasks: state.tasks.filter((el) => el.id !== action.payload),
            };
        }
        case "tasks/toggleCompleted": {
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed }
                        : task
                ),
            };
        }
        case "filters/setStatusFilter":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload,
                },
            };

        default:
            return state;
    }
};
