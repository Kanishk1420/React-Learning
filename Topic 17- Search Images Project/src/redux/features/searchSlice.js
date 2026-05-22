import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: '',
        activeTab: 'photos',
        results: [],
        loading: false,
        error: null,
        page:1
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
    setPage
} = searchSlice.actions


export default searchSlice.reducer;