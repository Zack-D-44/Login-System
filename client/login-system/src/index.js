import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TestComp from './Pages/TestComp';


const router = createBrowserRouter([{
  path: '/',
  element: <App />
},
{
  path: '/cool',
  element: <TestComp />
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
