import React from 'react';
import Label from '../Label/label';
import Value from '../Value/value';
import './asset.css';

const AssetPresentation = (props) => {
    const assets = props.assets.map((asset) =>
        <div className="asset" key={parseFloat(asset.free)}>
            <Label assetName={asset.asset} />
            <Value value={asset.free} />
        </div>
    );
    return (
        <div className="asset-container">
            {assets}
        </div>
    )
}

export default AssetPresentation;

