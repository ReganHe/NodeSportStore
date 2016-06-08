import React from 'react';
import { Link } from 'react-router';
import MainNav from './mainNav';

export  default React.createClass({
    render () {
        return (
            <header className='main-header navbar navbar-static-top container'>
                <div className='container-fluid'>
                    <Link to="list" className='navbar-brand logo'>ProductBuilder</Link>
                    <MainNav />
                </div>
            </header>
        );
    }
});
