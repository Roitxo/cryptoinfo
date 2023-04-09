import { useParams} from 'react-router-dom'

export default function CryptoPage() {
    const { slug } = useParams()

    return (
       <div className='crypto-details'>
            { slug }
       </div> 
    )
}