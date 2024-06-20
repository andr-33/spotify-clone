import { FC, useEffect } from "react"
import Login from "./components/Login"
import Spotify from "./components/Spotify/Spotify";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "@utils/reducer"
import axios from "axios";

const App:FC = () => {
  const [{ token }, dispatch] = useStateProvider();

  const validateToken = async (token:string) =>{
    try{
      const res = await axios.get('https://api.spotify.com/v1/me',
        {
          headers:{
            Authorization: "Bearer " + token,
          }
        }
      );

      if(res.status === 200){
        dispatch({ type: reducerCases.SET_TOKEN, payload: token});
      }
      else{
        throw new Error(`Error: request failed with status: ${res.status}`);
      }
    }
    catch(error){
      console.error(error);
      dispatch({ type: reducerCases.SET_TOKEN, payload: null });
    }
  };

  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      const accessToken = hash.substring(1).split("&")[0].split("=")[1];
      if(accessToken){
        validateToken(accessToken);
      }
    }
  },[dispatch]);

  return <>{ token ? <Spotify /> : <Login />}</>
    
}

export default App
