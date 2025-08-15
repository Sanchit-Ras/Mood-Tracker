import { Route, Routes } from "react-router"
import OrdersList from "./OrdersList"
import OrderDetail from "./OrderDetailWithRedux"

function App() {
  return (
    <Routes>
      <Route index element={<OrdersList/>}/>
      <Route path="/order/:orderId" element={<OrderDetail orderId={2}/>}/> {/* this component we are using is the output of connect HOC*/}
    </Routes>
  )
}

export default App
