import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Gallery from './pages/Gallery';
import Cart from './pages/Cart';
import About from './pages/About';
import { RouterProvider } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import {createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/about", element: <About />},
  {path:"/cart", element: <Cart />},
  {path:"/gallery", element: <Gallery />},
  {path:"*", element: <h1>404 Not Found</h1>}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
