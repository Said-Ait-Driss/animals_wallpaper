import { url ,apiKey } from "../../config/baseUrl";
import { Alert  } from "react-native";

export const GetHomeWalppapersAction = ( ) =>{

    return ( dispatch , getState ) => {

            url.get("/curated?per_page=30&page=1",{
                headers: {"Authorization": apiKey}
            })
                .then( response => {
                    dispatch({
                        type:"GET_WALPPAPERS",
                        walppapers:response.data.photos
                    })
                })
                .catch( err => {
                    console.log(err) ;
                    console.log("said ait driss err");
                })

            }

}