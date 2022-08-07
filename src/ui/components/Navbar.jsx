import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

export const Navbar = () => {

    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext);
    
    
    const handleLogout = () => {

        logout();

        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active': undefined} `}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active': undefined} `}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active': undefined} `}
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link active">
                         {  user?.name }
                    </span>
                    <button
                        className='nav-item nav-link btn bg-danger'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}