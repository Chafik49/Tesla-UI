import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './headerStyle.css';


export class Header extends Component {
    state ={
        showSideBar : false
    }
    OpenMenu = ()=>{
        this.setState({
            showSideBar : !this.state.showSideBar
        })

    }
    render() {
        return (
            <div className="header">
                
                <div className="tesla__title">
                    <img src="/images/logo.svg" alt="" />
                </div>
                
                <div className="tesla__models">
                    <Link className="link" to='/'>Model S</Link>
                    <Link className="link" to='/'>Model 3</Link>
                    <Link className="link" to='/'>Model X</Link>
                    <Link className="link" to='/'>Model Y</Link>
                    <Link className="link" to='/'>Solar Roof</Link>
                    <Link className="link" to='/'>Solar Panels</Link>
                    
                </div>
                <div className="right__tools">
                    <Link className="link" to='/'>Shop</Link>
                    <Link className="link" to='/'>Account</Link>
                    <Link className={this.state.showSideBar ? "link open" : "link"} to="" onClick={this.OpenMenu}>Menu</Link>
                    
                </div>
                <div className={this.state.showSideBar ? "side-bar open" : "side-bar"}>
                    
                    <Link className="link" to='/'> Model S </Link>
                    <Link className="link" to='/'> Model Y </Link>
                    <Link className="link" to='/'> Model X </Link>
                    <Link className="link" to='/'>Model 3</Link>
                    <Link className="link" to='/'> Solar Panels</Link>
                    <Link className="link" to='/'>Solar Roof</Link>
                    <Link className="link" to='/'>Existing Inventory</Link>
                    <Link className="link" to='/'>Used Inventory</Link>
                    <Link className="link" to='/'>Trade-in</Link>
                    <Link className="link" to='/'>Test Drive</Link>
                    <Link className="link" to='/'>Cubertruck</Link>
                    <Link className="link" to='/'>Roadster</Link>
                    <Link className="link" to='/'>Semi</Link>
                    <Link className="link" to='/'>Charging</Link>
                    <Link className="link" to='/'>Powerwall</Link>
                    <Link className="link" to='/'>Commercial Energy</Link>
                    <Link className="link" to='/'>Utilities</Link>
                    <Link className="link" to='/'>Find Us</Link>
                    <Link className="link" to='/'>Support</Link>
                    <Link className="link" to='/'>Investor Realtions</Link>
                    <i className="fa fa-times"  onClick={this.OpenMenu}></i>
                             
                </div>
            </div>
        )
    }
}

export default Header
