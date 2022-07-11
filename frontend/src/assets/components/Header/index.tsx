import logo from '../../img/logo.svg'
import './styles.css'

function Header()
{
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Developed by <a href="https://github.com/ltmartinelli/"> L.T. Martinelli</a></p>
            </div>
        </header>)
}

export default Header
