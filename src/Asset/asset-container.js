import React, { Component } from 'react';
import Asset from './asset-presentation';

class AssetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assets: [],
            showAssets: true,
            eurTotal: ''
        };
    }
    calculateTotal(assets) {
        return assets.reduce((acc, el) =>
            parseFloat(el.price_eur) + acc, 0);
    }

    showInfo(asset) {
        console.log(asset, "HEREERE");
    }

    componentWillMount() {
        fetch('http://localhost:3001/api/binance')
            .then(assets => assets.json())
            .then(assets => {
                this.setState({
                    assets,
                    eurTotal: this.calculateTotal(assets)
                })
            });
    }
    render() {
        return (
            <Asset
                assets={ this.state.assets }
                total={ this.state.eurTotal }
                showAssetDetails={ this.showInfo }
            />
        );
    }
}

export default AssetContainer;
