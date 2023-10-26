import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Seach";
import Favorites from "./pages/Favorites";
import FavoritesProvides from "./contexts/Favorites";
import VideoCadastre from "./pages/VideoCadastre";

function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvides>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/watch/:id" element={<Watch />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                    <Route path="/cadastre" element={<VideoCadastre />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </FavoritesProvides>
        </BrowserRouter>
    );
}

export default AppRoutes;