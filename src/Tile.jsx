import React, {Component} from 'react';

export default class Tile extends Component {
    tileClick(props) {

    }
    render() {
        return (
            <div className={"tile" + this.props.loc} onClick={() => this.tileClick(this.props)}>
                <p>{this.props.value}</p>
            </div>
        )
    }
}