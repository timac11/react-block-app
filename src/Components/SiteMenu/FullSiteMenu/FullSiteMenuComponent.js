import React, { Component } from 'react';
import './FullSiteMenuComponent.css'

class FullSiteMenuComponent  extends Component {
    getInitialState() {
        return {
            visible: true
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
        return (
                <div>
                </div>
        )
    }
}

export default FullSiteMenuComponent;

