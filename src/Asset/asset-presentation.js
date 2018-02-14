import React, { Component } from 'react';
import Label from '../Label/label';

class AssetPresentation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Label name={this.props.assetName}/>
        );
    }
}

export default AssetPresentation;

