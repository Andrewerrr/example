import React from "react";
import './styles.css';
import {Route, Routes, Link} from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
const navOptions =[{label:"Home", link:"/1"}, {label:"Details", link:"/2"}]


export default function Navigation() {
    return <div className='root'>
        <div className='navigation'>
            <ul className='list'>
                {navOptions.map(i =>
                    <li key={i.link}>
                        <Link className='link' to={i.link}>{i.label}</Link>
                    </li>
                )}
            </ul>
        </div>
        <div className='content'>
            <Routes>
                <Route
                    path={"/1"}
                    element={<Page1/>}
                />
                <Route
                    path={"/2"}
                    element={<Page2/>}
                />
            </Routes>
        </div>
    </div>
}