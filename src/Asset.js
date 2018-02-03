import React, { Component } from 'react';

class AssetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {assets: []};
    }
    render() {
        return (
            <div className="Asset">
                <p className="App-intro">
                </p>
            </div>
        );
    }
}

export default AssetContainer;
