import axios from "axios"
import { useState, useEffect } from "react"
import CryptoList from "../components/list/cryptoList";

export default function IndexPage() {
    let [cryptoList, setCryptoList] = useState([]);

    useEffect( () => {
        axios.get('api/')
        .then(response => {
            setCryptoList(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    
    if (cryptoList.length > 0) {
        return (
            <div className="container mx-auto">
                <ul>
                    <CryptoList list={cryptoList} />
                </ul>
                
            </div>
        )
    } else {
        return (
            <div>
                Cargando...
            </div>
        )
    }
    
}