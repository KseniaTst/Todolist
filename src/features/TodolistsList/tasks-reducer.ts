import {
    addTodolistAC,
    removeTodolistAC,
    setTodolistsAC
} from './todolists-reducer'
import {
    TaskPriorities,
    TaskStatuses,
    TaskType,
    todolistsAPI,
    UpdateTaskModelType
} from '../../api/todolists-api'
import {AppRootStateType} from '../../app/store'
import {setAppStatusAC} from '../../app/app-reducer'
import {handleServerAppError, handleServerNetworkError} from '../../utils/error-utils'
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: TasksStateType = {}

export const fetchTasksTC = createAsyncThunk('tasks/fetchTasks', async (todolistId: string, {dispatch}) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await todolistsAPI.getTasks(todolistId)
        const tasks = res.data.items
        dispatch(setAppStatusAC({status: 'succeeded'}))
        return {tasks, todolistId}
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    }
})

export const removeTaskTC = createAsyncThunk ( 'tasks/removeTask', async (payload:{id: string, todolistId: string}, { dispatch }) =>{
        try {
            await todolistsAPI.deleteTask(payload.todolistId, payload.id)
            dispatch(removeTaskAC({ taskId: payload.id, todolistId: payload.todolistId}))
        } catch (error) {
       handleServerNetworkError(error, dispatch)
        }

})

export const addTaskTC = createAsyncThunk('tasks/addTask', async (payload: { title: string, todolistId: string }, {dispatch}) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
       const res = await todolistsAPI.createTask(payload.todolistId, payload.title)
                if (res.data.resultCode === 0) {
                    const task = res.data.data.item
                    dispatch(addTaskAC(task))
                    dispatch(setAppStatusAC({status: 'succeeded'}))
                } else {
                    handleServerAppError(res.data, dispatch)
                }
    } catch (error) {
        handleServerAppError(error, dispatch)
    }

})

export const updateTaskTC = createAsyncThunk('tasks/updateTask',
    async (payload: { id: string, model: UpdateDomainTaskModelType, todolistId: string }, {dispatch, getState, rejectWithValue}) => {
        const state = getState() as AppRootStateType
        const task = state.tasks[payload.todolistId].find(t => t.id === payload.id)
        if (!task) {
            //throw new Error("task not found in the state");
            return rejectWithValue('task not found in the state')
        }

        const apiModel: UpdateTaskModelType = {
            deadline: task.deadline,
            description: task.description,
            priority: task.priority,
            startDate: task.startDate,
            title: task.title,
            status: task.status,
            ...payload.model
        }
        const res = await todolistsAPI.updateTask(payload.todolistId, payload.id, apiModel)
        try {
            if (res.data.resultCode === 0) {
                dispatch(updateTaskAC({taskId: payload.id, model: payload.model, todolistId: payload.todolistId}))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        }

    })

const slice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        removeTaskAC(state, action: PayloadAction<{ taskId: string, todolistId: string }>) {
            const tasks = state[action.payload.todolistId]
            const index = tasks.findIndex(t => t.id === action.payload.taskId)
            if (index > -1) {
                tasks.splice(index, 1)
            }
        },
        addTaskAC(state, action: PayloadAction<TaskType>) {
            state[action.payload.todoListId].unshift(action.payload)
        },
        updateTaskAC(state, action: PayloadAction<{ taskId: string, model: UpdateDomainTaskModelType, todolistId: string }>) {
            const tasks = state[action.payload.todolistId]
            const index = tasks.findIndex(t => t.id === action.payload.taskId)
            if (index > -1) {
                tasks[index] = {...tasks[index], ...action.payload.model}
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addTodolistAC, (state, action) => {
            state[action.payload.todolist.id] = [];
        });
        builder.addCase(removeTodolistAC, (state, action) => {
            delete state[action.payload.id];
        });
        builder.addCase(setTodolistsAC, (state, action) => {
            action.payload.todolists.forEach((tl: any) => {
                state[tl.id] = []
            })
        });
        builder.addCase(fetchTasksTC.fulfilled, (state, action)=>{
            if (action.payload)
            state[action.payload.todolistId] = action.payload.tasks
        })
    }
})

export const tasksReducer = slice.reducer

// actions
export const {removeTaskAC, addTaskAC, updateTaskAC} = slice.actions

// types
export type UpdateDomainTaskModelType = {
    title?: string
    description?: string
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: string
    deadline?: string
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}

