import React from 'react';
import Slider from 'rc-slider';

export default class Header extends React.Component {
    render() {
        const {autoRefresh, onSliderChange, sliderValue} = this.props;

        return (
            <div>
                <h1 className='top-color'>Top commented.</h1>
                <div className='row'>
                    <h4 className='top-color mr-4'>Current filter: {sliderValue}</h4>
                    <button
                        type='button'
                        className='btn btn-sm'
                        onClick={autoRefresh}
                    >
                        Start auto-refresh
                    </button>
                </div>
                <Slider
                    className='mt-2'
                    defaultValue={0}
                    min={0}
                    max={2000}
                    onChange={onSliderChange}
                />
            </div>
        )
    }
}