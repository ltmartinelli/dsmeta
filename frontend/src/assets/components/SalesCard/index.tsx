import NotificationButton from "../NotificationButton"
import './styles.css'

function SalesCard()
{
    return (

        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Sales</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text"/>
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text"/>
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
                                    <NotificationButton/>
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
                                <NotificationButton/>
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
                                <NotificationButton/>
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