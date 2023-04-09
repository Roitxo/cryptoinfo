import axios from "axios"
import { useState } from "react"
import CryptoList from "../components/list/cryptoList";

export default function IndexPage() {
    let [cryptoList, setCryptoList] = useState([]);

    axios.get('api/')
    .then(response => {
        setCryptoList(response.data)
    })
    .catch(error => {
        console.log(error)
    })

    return (
        <div className="index-page">
            <h1>Soy un index</h1>
            <ul>
                <CryptoList list={cryptoList} />
            </ul>
            
        </div>
    )
}