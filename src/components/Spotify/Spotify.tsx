import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Spotify = () =>{

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