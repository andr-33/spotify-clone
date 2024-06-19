import { useStateProvider } from "@utils/StateProvider";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import { reducerCases } from "@utils/reducer";

const Spotify = () =>{
    const [{ token }, dispatch] = useStateProvider();
    

    useEffect(()=>{
        const getUserData = async () =>{
            const { data } = await axios.get("https://api.spotify.com/v1/me", {
                headers:{
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });
            
            const userData = {
                name: data.display_name,
                id: data.id,
                url: data.external_urls.spotify,
                images: data.images
            };

            dispatch({type: reducerCases.SET_USER_DATA, payload: userData});
        };
        getUserData();
    },[token, dispatch]);

    return(
        <div className="w-screen h-screen overflow-hidden grid grid-rows-[85vh_15vh]">
            <div className="h-full w-full grid overflow-hidden grid-cols-[15vw_85vw] bg-spotify-lg bg-[#205764]">
                <Sidebar />
                <div className="h-full w-full overflow-auto">
                    <Navbar />
                    <div>
                        <Body />
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
};

export default Spotify;