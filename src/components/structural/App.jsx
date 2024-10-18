import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';

import Home from '../content/HomePage/Home';
import NoMatch from '../content/NoMatch';
import Projects from '../content/Projects';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="*" element={<NoMatch/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;