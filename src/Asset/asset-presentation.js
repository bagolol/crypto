import React from 'react';
import Label from '../Label/label';
import Value from '../Value/value';

const AssetPresentation = (props) => {
    const assets = props.assets.map((asset) =>
        <div key={parseFloat(asset.free)}>
            <Label assetName={asset.asset} />
            <Value value={asset.free} />
        </div>
    );
    return (
        <div>
            {assets};
        </div>
    )
}

export default AssetPresentation;

