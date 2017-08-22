import React, { Component } from 'react';
import './SiteMenuComponent.css'
import SiteMenuItemComponent from './SiteMenuItem/SiteMenuItemComponent'
import FullSiteMenuComponent from './FullSiteMenu/FullSiteMenuComponent'

class SiteMenuComponent  extends Component {

    getInitialState() {
        return {
            visible: false
        };
    }

    show() {
        this.setState({ visible: true });
        document.addEventListener("click", this.hide.bind(this));
    }

    hide() {
        document.removeEventListener("click", this.hide.bind(this));
        this.setState({ visible: false });
    }

    render() {
        return <div className="menu">
            <FullSiteMenuComponent ref="left" alignment="left">
                <SiteMenuItemComponent hash="first-page">First Page</SiteMenuItemComponent>
                <SiteMenuItemComponent hash="second-page">Second Page</SiteMenuItemComponent>
                <SiteMenuItemComponent hash="third-page">Third Page</SiteMenuItemComponent>
            </FullSiteMenuComponent>
        </div>;
    }
}

export default SiteMenuComponent;
