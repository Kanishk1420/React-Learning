import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: '',
        activeTab: 'photos',
        results: [],
        loading: false,
        error: null,
        page: 1,
        tenorPos: '',
        tenorNext: '',
        tenorHistory: []
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        },
        setActiveTabs(state, action) {
            state.activeTab = action.payload
        },
        setResults(state, action) {
            state.results = action.payload
            state.loading = false
        },
        setLoading(state) {
            state.loading = true
            state.error = null
        },
        setError(state, action) {
            state.error = action.payload
            state.loading = false
        },
        clearResults(state) {
            state.results = []
        },
        setPage(state, action) {
            state.page = action.payload
        },
        setTenorPos(state, action) {
            state.tenorPos = action.payload
        },
        setTenorNext(state, action) {
            state.tenorNext = action.payload
        },
        setTenorHistory(state, action) {
            state.tenorHistory = action.payload
        },
        resetTenor(state) {
            state.tenorPos = ''
            state.tenorNext = ''
            state.tenorHistory = []
        }
    }
})


export const {
    setQuery,
    setActiveTabs,
    setError,
    setLoading,
    setResults,
    clearResults,
    setPage,
    setTenorPos,
    setTenorNext,
    setTenorHistory,
    resetTenor
} = searchSlice.actions


export default searchSlice.reducer;