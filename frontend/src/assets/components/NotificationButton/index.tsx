import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../utils/request';
import icon from '../../img/notification-icon.svg'
import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response=>{
        toast.info("Message Sent!")
    })
}

function NotificationButton({ saleId }: Props)
{
    return (
        <div className="dsmeta-red-btn" onClick={() =>
        handleClick(saleId)} >
            <img src={icon} alt="Notify" />
        </div>
    )
}

export default NotificationButton
