export const reducerCases = {
    SET_TOKEN: "SET_TOKEN",
    SET_PLAYLISTS: "SET_PLAYLISTS",
    SET_PLAYLIST_ID: "SET_PLAYLIST_ID",
    SET_PLAYLIST: "SET_PLAYLIST",
    SET_USER_DATA: "SET_USER_DATA"
};

interface Image{
    height: number;
    width: number;
    url: string;
}

export interface Playlist {
    name: string;
    id: string;
    images: Array<Image>;
}

interface User{
    name: string;
    id: string;
    url: string;
    images: Array<Image> 
}

export interface State {
    token: string | null;
    playlists: Array<Playlist>;
    selectedPlaylistId: string | null;
    userData: User | null;
    selectedPlaylist: Playlist | null;
}

interface Action<T, P>{
    type: T;
    payload: P;
}

export const initialState: State = {
    token: null,
    playlists: [],
    selectedPlaylistId: null,
    userData: null,
    selectedPlaylist: null
};

type SetTokenAction = Action<typeof reducerCases.SET_TOKEN, string|null>;
type SetPlaylistsAction = Action<typeof reducerCases.SET_PLAYLISTS, Array<Playlist>>;
type SetPlaylistAction = Action<typeof reducerCases.SET_PLAYLIST, Playlist>
type SetPlaylistIdAction = Action<typeof reducerCases.SET_PLAYLIST_ID, string>;
type SetUserDataAction = Action<typeof reducerCases.SET_USER_DATA, User>;

export type ActionTypes = SetTokenAction | SetPlaylistsAction | SetPlaylistAction | SetPlaylistIdAction | SetUserDataAction

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
        case reducerCases.SET_PLAYLIST:
            return{
                ...state,
                selectedPlaylist: action.payload
            };
        case reducerCases.SET_PLAYLIST_ID:
            return{
                ...state,
                selectedPlaylistId: action.payload
            };
        case reducerCases.SET_USER_DATA:
            return{
                ...state,
                userData: action.payload
            }
        default:
            return state;
    }
};

export default reducer;