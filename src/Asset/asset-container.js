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
            .then(assets => this.setState({assets: assets.balances}));
    }
    render() {
        const assets = this.state.assets.map((asset, i) =>
            <Asset className="asset" key={i.toString()}
                assetName={asset.asset} />
        );
        console.log(this.state.assets);
        return (
            <div>
                {assets}
            </div>
        );
    }
}

export default AssetContainer;
