import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import "./Navbar.css"

class Navbar extends Component {
    state = { clicked: false }
   

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <a href="#hero-section"><svg className="navbar-logo" xmlns="http://www.w3.org/2000/svg" width="405" height="89" viewBox="0 0 405 89">
                <g id="Component_2_2" data-name="Component 2 – 2" transform="translate(0 9)">
                <text id="LF" transform="translate(11 57)" font-size="50" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">LF</tspan></text>
                 <g id="Path_1" data-name="Path 1" fill="none">
                 <path d="M20,0H80V60A20,20,0,0,1,60,80H0V20A20,20,0,0,1,20,0Z" stroke="none"/>
                 <path d="M 20 1 C 17.43457794189453 1 14.94641876220703 1.502220153808594 12.60465240478516 2.492698669433594 C 10.34226989746094 3.449607849121094 8.310218811035156 4.819725036621094 6.564979553222656 6.564979553222656 C 4.819725036621094 8.310218811035156 3.449607849121094 10.34226989746094 2.492698669433594 12.60465240478516 C 1.502220153808594 14.94641876220703 1 17.43457794189453 1 20 L 1 79 L 60 79 C 62.56542205810547 79 65.05357360839844 78.49777984619141 67.39534759521484 77.50730133056641 C 69.65773010253906 76.55039215087891 71.68977355957031 75.18027496337891 73.43502044677734 73.43502044677734 C 75.18027496337891 71.68977355957031 76.55039215087891 69.65773010253906 77.50730133056641 67.39534759521484 C 78.49777984619141 65.05357360839844 79 62.56542205810547 79 60 L 79 1 L 20 1 M 20 0 L 80 0 L 80 60 C 80 71.04568481445312 71.04568481445312 80 60 80 L 0 80 L 0 20 C 0 8.954307556152344 8.954307556152344 0 20 0 Z" stroke="none" fill="#cba239"/>
                </g>
                <text id="LAURA_FAST" data-name="LAURA FAST" transform="translate(103 45)" font-size="50" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">LAURA FAST</tspan></text>
                <text id="MULTIMEDIA_DESIGN" data-name="MULTIMEDIA DESIGN" transform="translate(147 75)" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">MULTIMEDIA DESIGN</tspan></text>
  </g>
</svg></a>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                        
                    })}
                </ul>
            </nav>
        )
    }
}


export default Navbar