import React, { Component } from 'react';
import Section from './Section';

export class Sections extends Component {
    state = {
        carSection : [
            { id : 1, name : " Model S", text : "Order Online for",link :"Touchless Delivery",
             url : "/images/model-s.jpg",btnone : "CUSTOM ORDER",btntwo : "EXISTING INVENTORY",
             arrow : "fa fa-chevron-down"
            },
            { id : 2, name : " Model Y" ,text : "Order Online for",link :"Touchless Delivery",
            url : "/images/model-y.jpg", btnone : "CUSTOM ORDER",btntwo : "EXISTING INVENTORY"
            },
            { id : 3, name : " Model 3",text : "Order Online for",link :"Touchless Delivery",
             url : "/images/model-3.jpg", btnone : "CUSTOM ORDER",btntwo : "EXISTING INVENTORY"
            },
            { id : 4, name : " Model X",text : "Order Online for",link :"Touchless Delivery",
             url : "/images/model-x.jpg", btnone : "CUSTOM ORDER",btntwo : "EXISTING INVENTORY"
            },
            { id : 5, name : "Solar Panels",text : "Lowest Cost Solar Panels in America",
             url : "/images/solar-panel.jpg", btnone : "ORDER NOW",btntwo : "Learn More"
            },
            { id : 6, name : "Solar Roof",text : "Produce Clean Energy From Your Roof",
             url : "/images/solar-roof.jpg", btnone : "ORDER NOW",btntwo : "Learn More"
            },
            { id : 7, name : "Accessories",url : "/images/accessories.jpg", btnone : "SHOP NOW"
            }

        ]
    }
    render() {
        return(
            <div>
            {this.state.carSection.map(car=> 
            <Section data={car} key={car.id}/>
            )}
            </div>

        )
        
    }
}

export default Sections
