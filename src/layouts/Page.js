import React, { Component } from 'react';
import {Route,Routes,Navigate} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import AdminPage from '../pages/AdminPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import ProductsListPage from '../pages/ProductsListPage';


const permission=false;

const CheckPermission=()=>{
   return( permission? <h3>Panel admina - dzień dobry</h3>:<Navigate to='/login'/>
   )}

const Page = () => {
    return (
        <>
        <Routes>
            <Route path='/react-router' element={<HomePage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/products' element={<ProductsListPage/>}/>
            <Route path='/product/:id' element={<ProductPage/>}/>
            <Route path='/admin' element={<CheckPermission/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
        </>
    );
}
 
export default Page;