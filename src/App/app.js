import React, { Component } from 'react';
import './app.css';
import AssetContainer from '../Asset/asset-container';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                    <h1 className="App-title">Crypto-portafoglio</h1>
                <AssetContainer />
            </div>
        );
    }
}
export default App;
