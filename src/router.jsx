import { Route, Routes } from "react-router"
import App from "./App"
import BottleCreate from "./components/BottleCreate"
import Bottles from "./components/Bottles"
import NotFound from "./layout/NotFound"


function Router() {

  return (
    <Routes>
        <Route path="/" element={<App />} >
            <Route path="bottles" element={<Bottles />}>
                <Route path=":id" element={<BottleCreate />} />
                <Route path="new" element={<BottleCreate />} />
            </Route>    
        </Route>
        <Route path="*" element={<NotFound />} />

    </Routes>
  )
}

export default Router
