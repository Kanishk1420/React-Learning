import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        query:'',
        activeTab: 'Photos',
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery:(state,action)=>{
            state.query = action.payload; // action.payload is the value passed when dispatching the action
        },
        setActiveTab:(state,action)=>{
            state.activeTab = action.payload;
        },
        setResults:(state,action)=>{
            state.results = action.payload;
            state.loading = false; // when results are set, loading is false
        },
        setLoading:(state)=>{
            state.loading = true; // when loading is true, results are empty and error is null
            state.error = null;
        },
        setError:(state,action)=>{
            state.error = action.payload;
            state.loading = false; // when error occurs, loading is false and results are empty
        },
        clearResults(state){
            state.results = []; // Clear results when query changes or new search is initiated
        }
    }  
        
})
export const {setQuery,setActiveTab,setResults,setLoading,setError,clearReasults} = searchSlice.actions;
export default searchSlice.reducer;
