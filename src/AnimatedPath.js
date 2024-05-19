import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from "@authentication/Layout";
import { AnimatePresence } from 'framer-motion';
import NotFound from '@pages/NotFound';
import Home from '@pages/home/Home';
import AboutUs from '@pages/about/AboutUs';
import Blog from '@pages/blog/Blog';
import Listing from '@pages/listing/Listing';
import Project from '@pages/project/Project';
import ContactUs from '@pages/contactUs/ContactUs';

function AnimatedPath() { 
    return (
        <>
            <AnimatePresence>
                <Routes>
                    <Route exact path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route  path='/about-us' element={<AboutUs />}/>
                        <Route  path='/blog' element={<Blog />}/>
                        <Route  path='/listings' element={<Listing />}/>
                        <Route  path='/project' element={<Project />}/>
                        <Route  path='/contact-Us' element={<ContactUs />}/>
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default AnimatedPath