import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Header from './Header';
import Footer from '../../components/layout/Footer';

const HomePage = () => {
    return (
        <>
            <header className='bg-[#F2F6FD]'>
                <Navbar></Navbar>
                <section>
                    <Header></Header>
                </section>
            </header>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomePage;