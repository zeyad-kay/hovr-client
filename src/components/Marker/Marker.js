import { Component } from 'react';

export class Marker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location
        }
        this.renderFunction = this.renderFunction.bind(this);
    }
    renderFunction(parentMap, fakeProps) {
        new window.google.maps.Marker({
            position: fakeProps.location,
            map: parentMap,
            icon: fakeProps.icon,
            visible: fakeProps.visible
        });
    }

    render() {
        return (null);
    }
}