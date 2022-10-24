import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/js/dist/dropdown';
import App from './app';
import ReactDOM from "react-dom/client";
import Selector from "./components/selector";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Analytics from "./components/analytics";
import Profile from "./components/profile";
import Dashboard from "./components/Dashboard";
import Home from "./components/home";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
           <BrowserRouter>
           <App/>
                <Routes>
                    <Route path="/selector" element={<Selector/>}/>
                    <Route path="/analytics" element={<Analytics/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
    </React.StrictMode>
);