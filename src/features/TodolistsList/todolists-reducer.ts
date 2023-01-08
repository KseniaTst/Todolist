import {todolistsAPI, TodolistType} from '../../api/todolists-api'
import {
    RequestStatusType,
    setAppStatusAC,
} from '../../app/app-reducer'
import {handleServerNetworkError} from '../../utils/error-utils'
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: Array<TodolistDomainType> = []

export const fetchTodolistsTC = createAsyncThunk('todolists/fetchTodolists', async (_,{dispatch})=>{
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await todolistsAPI.getTodolists()
        dispatch(setTodolistsAC({todolists: res.data}))
        dispatch(setAppStatusAC({status: 'succeeded'}))
    }  catch (error) {
        handleServerNetworkError(error, dispatch)
    }

})

export const removeTodolistTC = createAsyncThunk('todolists/removeTodolist',
    async (todolistId: string,{dispatch})=>{
    dispatch(setAppStatusAC({status: 'loading'}))
    dispatch(changeTodolistEntityStatusAC({id: todolistId, status: 'loading'}))
    try {
        await todolistsAPI.deleteTodolist(todolistId)
        dispatch(removeTodolistAC({id: todolistId}))
        dispatch(setAppStatusAC({status: 'succeeded'}))
    }  catch (error) {
        handleServerNetworkError(error, dispatch)
    }

})

export const addTodolistTC = createAsyncThunk('todolists/addTodolist',
    async (title: string,{dispatch}) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await todolistsAPI.createTodolist(title)
        dispatch(addTodolistAC({todolist: res.data.data.item}))
        dispatch(setAppStatusAC({status: 'succeeded'}))
    }  catch (error) {
        handleServerNetworkError(error, dispatch)
    }

})

export const changeTodolistTitleTC = createAsyncThunk('todolists/changeTodolistTitle',
    async (payload:{id: string, title: string},{dispatch}) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
         await todolistsAPI.updateTodolist(payload.id, payload.title)
        dispatch(changeTodolistTitleAC({id: payload.id, title: payload.title}))
    }  catch (error) {
        handleServerNetworkError(error, dispatch)
    }

})

const slice = createSlice({
    name: 'todolists',
    initialState: initialState,
    reducers: {
        removeTodolistAC(state, action: PayloadAction<{ id: string }>) {
            const index = state.findIndex(tl => tl.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
            }
        },
        addTodolistAC(state, action: PayloadAction<{ todolist: TodolistType }>) {
            state.unshift({...action.payload.todolist, filter: 'all', entityStatus: 'idle'})
        },
        changeTodolistTitleAC(state, action: PayloadAction<{ id: string, title: string }>) {
            const index = state.findIndex(tl => tl.id === action.payload.id);
            state[index].title = action.payload.title;
        },
        changeTodolistFilterAC(state, action: PayloadAction<{ id: string, filter: FilterValuesType }>) {
            const index = state.findIndex(tl => tl.id === action.payload.id);
            state[index].filter = action.payload.filter;
        },
        changeTodolistEntityStatusAC(state, action: PayloadAction<{ id: string, status: RequestStatusType }>) {
            const index = state.findIndex(tl => tl.id === action.payload.id);
            state[index].entityStatus = action.payload.status;
        },
        setTodolistsAC(state, action: PayloadAction<{ todolists: Array<TodolistType> }>) {
            return action.payload.todolists.map(tl => ({...tl, filter: 'all', entityStatus: 'idle'}))
        }
    }
})

export const todolistsReducer = slice.reducer
export const {
    removeTodolistAC, addTodolistAC, changeTodolistTitleAC
    , changeTodolistFilterAC, changeTodolistEntityStatusAC, setTodolistsAC
} = slice.actions

// types
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>;
export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>;
export type SetTodolistsActionType = ReturnType<typeof setTodolistsAC>;

export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
    entityStatus: RequestStatusType
}