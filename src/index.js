import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost.jsx';
import Dashboard from './components/Dashboard.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import UserProfile from './pages/UserProfile.jsx';
import CreatePost from './pages/CreatePost.jsx';
import CatergoryPost from './pages/CatergoryPost.jsx';
import EditPost from './pages/EditPost.jsx';
import Logout from './pages/Logout.jsx';

const router =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true, element: <Home/>},
      {path:"posts/:id", element: <SinglePost />},
      {path:"register", element: <Register />},
      {path:"login", element: <Login />},
      {path:"profile/id", element: <UserProfile />},
      {path:"create", element: <CreatePost />},
      {path:"posts/categories/:category", element: <CatergoryPost/>},
      {path:"myposts/:id", element: <Dashboard />},
      {path:"posts/:id/edit", element: <EditPost />},
      {path:"logout", element: <Logout />}


      
    ]
    
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

