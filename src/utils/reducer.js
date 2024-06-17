import { reducerCases } from "./constants";

export const initialState = {
    token: null,
    playlists: [],
    selectedPlaylistId: null,
};

const reducer = (state, action) =>{
    switch(action.type){
        case reducerCases.SET_TOKEN:
            return{
                ...state,
                token: action.accessToken,
            };
        case reducerCases.SET_PLAYLISTS:
            return{
                ...state,
                playlists: action.playlist,
            };
        case reducerCases.SET_PLAYLIST_ID:
            return{
                ...state,
                selectedPlaylistId: action.selectedPlaylistId
            };
        default:
            return state;
    }
};

export default reducer;