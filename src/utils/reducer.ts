export const reducerCases = {
    SET_TOKEN: "SET_TOKEN",
    SET_PLAYLISTS: "SET_PLAYLISTS",
    SET_PLAYLIST_ID: "SET_PLAYLIST_ID",
    SET_PLAYLIST: "SET_PLAYLIST",
    SET_USER_DATA: "SET_USER_DATA",
    SET_PLAYING: "SET_PLAYING",
    SET_PLAYER_STATE: "SET_PLAYER_STATE"
};

interface Image{
    height: number;
    width: number;
    url: string;
}

interface Playing{
    id: string,
    name: string,
    artists: string, 
    image: Image
}

interface Track{
    id: string;
    name: string;
    artists: Array<any>;
    image: Image;
    duration: number;
    album: string;
    context_uri: string;
    track_number: number;
}

export interface Playlist {
    name: string;
    id: string;
    images: Array<Image>;
    description: string | undefined;
    tracks: Array<Track> | undefined;
}

interface User{
    name: string;
    id: string;
    url: string;
    images: Array<Image> 
}

export interface State {
    token: string | null;
    userData: User | null;
    playlists: Array<Playlist>;
    selectedPlaylistId: string | null;
    selectedPlaylist: Playlist | null;
    currentPlaying: Playing | null;
    playerState: boolean
}

interface Action<T, P>{
    type: T;
    payload: P;
}

export const initialState: State = {
    token: null,
    userData: null,
    playlists: [],
    selectedPlaylistId: null,
    selectedPlaylist: null,
    currentPlaying: null,
    playerState: false,
};

type SetTokenAction = Action<typeof reducerCases.SET_TOKEN, string|null>;
type SetPlaylistsAction = Action<typeof reducerCases.SET_PLAYLISTS, Array<Playlist>>;
type SetPlaylistAction = Action<typeof reducerCases.SET_PLAYLIST, Playlist>
type SetPlaylistIdAction = Action<typeof reducerCases.SET_PLAYLIST_ID, string>;
type SetUserDataAction = Action<typeof reducerCases.SET_USER_DATA, User>;
type SetPlayingAction = Action<typeof reducerCases.SET_PLAYING, Playing>;
type SetPlayerStateAction = Action<typeof reducerCases.SET_PLAYER_STATE, boolean>;

export type ActionTypes = SetTokenAction | SetPlaylistsAction | SetPlaylistAction | SetPlaylistIdAction | SetUserDataAction | SetPlayingAction | SetPlayerStateAction

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
        case reducerCases.SET_PLAYING:
            return{
                ...state,
                currentPlaying: action.payload
            }
        case reducerCases.SET_PLAYER_STATE:
            return{
                ...state,
                playerState: action.payload
            }
        default:
            return state;
    }
};

export default reducer;