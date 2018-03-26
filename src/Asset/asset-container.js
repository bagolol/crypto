import React, { Component } from 'react';
import Asset from './asset-presentation';

class AssetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assets: [],
            eurTotal: ''
        };
    }
    calculateTotal(assets) {
        return assets.reduce((acc, el) =>
            parseFloat(el.price_eur) + acc, 0);
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
            <Asset assets={this.state.assets} total={this.state.eurTotal} />
        );
    }
}

export default AssetContainer;
