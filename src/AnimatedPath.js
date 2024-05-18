import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from "@authentication/Layout";
import { AnimatePresence } from 'framer-motion';
import NotFound from '@pages/NotFound';
import Home from '@pages/home/Home';

function AnimatedPath() { 
    return (
        <>
            <AnimatePresence>
                <Routes>
                    <Route exact path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default AnimatedPath