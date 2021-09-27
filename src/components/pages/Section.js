import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import './sectionStyle.css';
import 'font-awesome/css/font-awesome.min.css';
import Fade from 'react-reveal/Fade';

class Section extends Component {

    render() {
        const {name,text,link,url,btnone,btntwo,arrow} = this.props.data;
        
        
        return (
            <div className="section-container"
            
              style ={{
                  width : "100vw",
                  maxWidth : "100vw",
                  height : "100vh",
                  overflowX : 'hidden',
                  backgroundImage : `url(${url})`,
                  backgroundPosition : "center",
                  backgroundSize : "cover",
                  scrollBehavior: 'smooth',
                  
                  }}
                  >
            <Fade top>
                  <header>
                        <div className="car-name">{name}</div>
                        <div className="text">{text} <Link className="link" to="/">{link}</Link></div>
                    </header>
            </Fade>
            
            <Fade bottom>
                <div className="two-btn">
                    <Link className="link" to="/">{btnone}</Link>
                    {btntwo && <Link className="link" to="/">{btntwo}</Link>}
                    
                    
                    <div className="arrow-down">
                            <i className={arrow}></i>
                    </div>
                </div>
           </Fade>
            

                
            </div>
        )
    }
}

export default Section


