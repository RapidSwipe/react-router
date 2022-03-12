import React, { Component } from 'react';
import {Route,Routes} from 'react-router-dom';

import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';

import '../styles/Header.css';

const ShowPicture=(props)=><img src={props.pic} alt='miasto'/>


const Header = () => {



    return (
        <>
            <Routes>
                <Route path='/' element={<ShowPicture pic={img1}/>}/>
                <Route path='/products' element={<ShowPicture pic={img2}/>}/>
                <Route path='/contact' element={<ShowPicture pic={img3}/>}/>
                <Route path='/admin' element={<ShowPicture pic={img3}/>}/>
                <Route path='*' element={<ShowPicture pic={img1}/>}/>

            </Routes>
        </>
    );
}
 
export default Header;