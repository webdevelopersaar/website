// Module Imports
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
// Custom Imports

// Component
const Footer = ({ className, ...props }) => (
    <footer className={className}>
        <ul>
            <li><Link to="/imprresum">Imprresum</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
            <li><a target="_blank" href="https://twitter.com/webdevsaar">Twitter</a></li>
            <li><a target="_blank" href="https://youtube.com/webdevsaar">YouTube</a></li>
        </ul>
    </footer>
)

// Export default as styled component
export default styled(Footer)`
    display: flex;
    justify-content: flex-end;
    ul {
        margin: 0;
        padding: 0;
        li {
            display: inline-block;
            &:not(:last-child){
                margin-right: 15px;
            }
        }
    }
`

// PropTypes
Footer.propTypes = {
    className: PropTypes.string,
}