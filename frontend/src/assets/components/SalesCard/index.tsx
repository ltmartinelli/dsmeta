import NotificationButton from "../NotificationButton"
import './styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../utils/request";
import { Sale } from "../../../models/sale";

function SalesCard()
{

    const min = new Date(new Date().setDate(new Date().getDate() - 1000))
    const max = new Date()

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);
    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() =>
    {
        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);

           axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response =>
            {
                setSales(response.data.content);
            });
    }, [minDate, maxDate]);


    return (

        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Sales</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Date</th>
                            <th>Seller</th>
                            <th className="show992">Visits</th>
                            <th className="show992">Sales</th>
                            <th>Total</th>
                            <th>Notify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale =>
                        {
                            return (
                                <tr key={sale.id} >
                                    <td className="show992">{sale.id}</td>
                                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show992">{sale.visited}</td>
                                    <td className="show992">{sale.deals}</td>
                                    <td>{sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <NotificationButton saleId={sale.id}/>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })

                        }
                    </tbody>
                </table>
            </div>


        </div>

    )
}

export default SalesCard