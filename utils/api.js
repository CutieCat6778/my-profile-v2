import axios from "axios";

export async function FetchStatus(){
    const { data } = await axios.get("https://txzje-backend.herokuapp.com/");
    return data;
}