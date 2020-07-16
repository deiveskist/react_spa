import React from "react";
import { Navbar, NavItem, Row} from 'react-materialize';

const Header = () => (
    <Row className="header">
        <Navbar
            alignLinks="left"    
            id="mobile-nav"    
            options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
        }}
        >
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/contact'>Contact</NavItem>
    </Navbar>
  </Row>
  );
export default Header;