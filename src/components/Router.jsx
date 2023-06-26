import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { paths } from "../router/path";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                {
                    paths.map(item=><Route key={item.path} path={item.path} element={item.element} />)
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Router;