import React, { Component } from "react";

class Header extends Component {

    connectWallet() {
        if (window.ethereum) {
            
        }
    }

    render() {
        return(
            <div>
                <div class="row">
                    <h2>NFT Royalties</h2>
                    <button onClick={this.connectWallet}>Connect</button>
                </div>
            </div>
        );
    }
}

export default Header;