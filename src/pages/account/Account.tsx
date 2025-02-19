import * as React from "react";
import {NavLink as RRNavLink, Route, Routes} from "react-router-dom";
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";

import {Container} from "../../reusable";
import Affiliate from "./components/affiliate/Affiliate";
import Stats from "./components/stats/Stats";
import {Helmet} from "react-helmet";
import PathNotFound from "../../app/PathNotFound";

const Account = () => (
    <>
        <Helmet>
            <title>Plinko</title>
            <meta name="description" content="Account management" />
        </Helmet>
        <Container>
            <Navbar color="faded" light expand style={{marginLeft: "-1.5rem"}}>
                <Nav navbar>
                    <NavItem>
                        <NavLink tag={RRNavLink} to="stats">
                            Statistics
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RRNavLink} to="affiliate">
                            Affiliate
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Routes>
                <Route path="stats" element={<Stats />} />
                <Route path="affiliate" element={<Affiliate />} />
                <Route path="*" element={<PathNotFound />} />
            </Routes>
        </Container>
    </>
);

export default Account;
