import React, { Component } from 'react';
import Label from '../Label/label';

class AssetPresentation extends Component {
    constructor(props) {
        super(props);
        this.state = {assets: []};
    }
    render() {
        return (
            <Label name="bitcoin"/>
        );
    }
}

export default AssetPresentation;

