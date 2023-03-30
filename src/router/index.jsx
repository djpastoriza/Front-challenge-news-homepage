import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from './../pages/Home';
import New from './../pages/New';
import Popular from './../pages/Popular';
import Trending from './../pages/Trending';
import Categories from './../pages/Categories';
import NotFound from './../pages/NotFound';



export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children:[
                    {path:'/' , element:<Home />},
                    {path:'/new' , element:<New />},
                    {path:'/popular' , element:<Popular />},
                    {path:'/trending' , element:<Trending />},
                    {path:'/categories' , element:<Categories />},
                ]
            }
        ]
    }
]);