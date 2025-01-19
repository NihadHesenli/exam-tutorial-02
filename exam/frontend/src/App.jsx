import {Routes,Route} from 'react-router-dom'
import './App.css'
import NotFound from './companents/NotFound/NotFound'
import ClientLayout from './layout/Client/ClientLayout'
import Home from './pages/CLient/Home/Home'
import AllProducts from './pages/CLient/Products/AllProducts'
import Details from './pages/CLient/Details/Details'
import Favorites from './pages/CLient/Favorites/Favorites'
import AdminLayout from './layout/Admin/AdminLayout'
import AdminTable from './pages/Admin/AdminTable/AdminTable'
import AddWatch from './pages/Admin/AddWatch/AddWatch'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<ClientLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='products'>
      <Route index element={<AllProducts/>}/>
      <Route path=':id' element={<Details/>}/>
      </Route>
      <Route path='wishlist' element={<Favorites/>}/>
      </Route>
      <Route path='/admin' element={<AdminLayout/>}>
      <Route path='/admin/admin-table' element={<AdminTable/>}/>
      <Route path='/admin/admin-add' element={<AddWatch/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
