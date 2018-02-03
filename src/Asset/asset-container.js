import React, { Component } from 'react';

class AssetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {assets: []};
    }
    render() {
        return (
            <div className="asset">
            </div>
        );
    }
}

export default AssetContainer;
