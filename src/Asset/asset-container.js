import React, { Component } from 'react';
import Asset from './asset-presentation';

class AssetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {assets: []};
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/binance')
            .then(assets => assets.json())
            .then(assets => this.setState({ assets: assets }));
    }
    render() {
        return (
            <Asset assets={this.state.assets} />
        );
    }
}

export default AssetContainer;
