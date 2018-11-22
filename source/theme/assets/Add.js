// Core
import React, { Component } from 'react';

// Instruments
import { withSvg } from '../../instruments/withSvg';

class AddIcon extends Component {
    render () {
        const { hover, disabled, color1, color2, color3, title='' } = this.props;

        const fill = disabled ? color3 : hover ? color1 : color2;

        return (
            <g>
                <path
                    d="M 25.011719 0.296875 C 11.363281 0.296875 0.304688 11.355469 0.304688 25 C 0.304688 38.648438 11.363281 49.707031 25.011719 49.707031 C 38.65625 49.707031 49.71875 38.648438 49.71875 25 C 49.71875 11.355469 38.65625 0.296875 25.011719 0.296875 Z M 25.011719 47.730469 C 12.476562 47.730469 2.28125 37.535156 2.28125 25 C 2.28125 12.46875 12.476562 2.269531 25.011719 2.269531 C 37.542969 2.269531 47.742188 12.46875 47.742188 25 C 47.742188 37.535156 37.542969 47.730469 25.011719 47.730469 Z M 25.011719 47.730469 "
                    fill = { fill }
                />
                <path
                    d="M 26 10.179688 L 24.023438 10.179688 L 24.023438 24.015625 L 10.25 24.015625 L 10.25 25.992188 L 24.023438 25.992188 L 24.023438 39.761719 L 26 39.761719 L 26 25.992188 L 39.835938 25.992188 L 39.835938 24.015625 L 26 24.015625 Z M 26 10.179688 "
                    fill = { fill }
                />
            </g>
        );
    }
}

export default withSvg({
    viewBoxWidth:  53.8,
    viewBoxHeight: 53.8,
    width:         50,
    height:        50,
})(AddIcon);
