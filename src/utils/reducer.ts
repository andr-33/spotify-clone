export const reducerCases = {
    SET_TOKEN: "SET_TOKEN",
    SET_PLAYLISTS: "SET_PLAYLISTS",
    SET_PLAYLIST_ID: "SET_PLAYLIST_ID",
};

export interface PlaylistCover{
    height: number;
    width: number;
    url: string;
}

export interface Playlist {
    name: string;
    id: string;
    images: Array<PlaylistCover>;
}

export interface State {
    token: string | null;
    playlists: Array<Playlist>;
    selectedPlaylistId: string | null;
}

interface Action<T, P>{
    type: T;
    payload: P;
}

export const initialState: State = {
    token: null,
    playlists: [],
    selectedPlaylistId: null,
};

type SetTokenAction = Action<typeof reducerCases.SET_TOKEN, string>
type SetPlaylistsAction = Action<typeof reducerCases.SET_PLAYLISTS, Array<Playlist>>
type SetPlaylistIdAction = Action<typeof reducerCases.SET_PLAYLIST_ID, string>

export type ActionTypes = SetTokenAction | SetPlaylistsAction | SetPlaylistIdAction

const reducer = (state: State, action: ActionTypes) =>{
    switch(action.type){
        case reducerCases.SET_TOKEN:
            return{
                ...state,
                token: action.payload,
            };
        case reducerCases.SET_PLAYLISTS:
            return{
                ...state,
                playlists: action.payload,
            };
        case reducerCases.SET_PLAYLIST_ID:
            return{
                ...state,
                selectedPlaylistId: action.payload
            };
        default:
            return state;
    }
};

export default reducer;