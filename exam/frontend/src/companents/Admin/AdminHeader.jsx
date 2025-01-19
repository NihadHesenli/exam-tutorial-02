import { NavLink } from 'react-router-dom'
import './index.css'

const AdminHeader = () => {
  return (
    <div className="adminHeader">
        <div className="admin">
            <h2 >Admin</h2>
            <nav>
                <ul className="admin-ul">
                    <li>
                        <NavLink to={'/admin'} className={'admin-a'}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/admin/admin-table'} className={'admin-a'}>AdminTable</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/admin/admin-add'} className={'admin-a'}>AddWatch</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default AdminHeader