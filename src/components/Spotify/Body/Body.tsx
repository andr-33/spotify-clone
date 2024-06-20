import { useStateProvider } from "@utils/StateProvider";

const Body = () =>{
    const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] = useStateProvider();

    const playTrack = () =>{

    };

    return(
        <div>Body</div>
    );
};

export default Body;