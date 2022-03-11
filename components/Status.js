import Image from "next/image";
import { useEffect, useState } from "react"
import { FetchStatus } from "../utils/api";
import style from '../styles/status.module.css';

export default function Status() {
    const [data, setData] = useState();

    useEffect(() => {
        async function GetData(){
            try{
                if(data) return;
                const res = await FetchStatus();
                if(res) return setData(res);
                else return console.log("Cannot get data from backend!");
            }catch(e){
                console.error(e);
            }
        }
        GetData()
    })

    return (
        <div>
            {
                data ? <Main data={data}/> : null
            }
        </div>
    )
}

export function Main({data}) {
    return (
        <div className={style.container}>
            <Image src={data.image} alt="Spotify Music Logo" width={"144px"} height="144px"/>
            <div className={style.box}>
                <span className={style.subtitle}>
                    Is listening to
                </span>
                <h1 className={style.title}>
                    {data.name}
                </h1>
            </div>
        </div>
    )
}