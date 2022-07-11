import NotificationButton from "../NotificationButton"
import './styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function SalesCard()
{

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);


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
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/10/2022</td>
                            <td>Anakin</td>
                            <td className="show992">100</td>
                            <td className="show992">13</td>
                            <td>R$ 55400.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/10/2022</td>
                            <td>Anakin</td>
                            <td className="show992">100</td>
                            <td className="show992">13</td>
                            <td>R$ 55400.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/10/2022</td>
                            <td>Anakin</td>
                            <td className="show992">100</td>
                            <td className="show992">13</td>
                            <td>R$ 55400.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>

    )
}

export default SalesCard