import React from 'react';
import Label from '../Label/label';
import './asset.css';

const AssetPresentation = (props) => {
    const assets = props.assets.map((asset) =>
        <div className="asset"
            key={ asset.free }
            onClick={ () => props.showAssetDetails(asset.asset) }
        >
            <Label assetName={ asset.asset }/>
            <p className="asset-value">{ asset.free }</p>
            <p>{ asset.price_eur } €</p>
        </div>
    );
    return (
        <React.Fragment>
            <div className="euro-value"><p>{ props.total }</p></div>
            <div className="asset-container">
                { assets }
            </div>
        </React.Fragment>
    )
}

export default AssetPresentation;

