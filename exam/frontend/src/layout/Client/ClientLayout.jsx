import ClientFooter from "../../companents/Client/ClientFooter/ClientFooter"
import ClientHeader from "../../companents/Client/CLientHeader/ClientHeader"
import {Outlet} from 'react-router-dom'
const ClientLayout = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    <ClientFooter/>
    </>
  )
}

export default ClientLayout