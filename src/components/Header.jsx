import React from 'react';

export default class Header extends React.Component {
    render() {
        const {autoRefresh} = this.props;

        return (
            <div>
                <h1 className='top-color'>Top commented.</h1>
                <button
                    type='button'
                    className='btn btn-sm'
                    onClick={autoRefresh}
                >
                    Start auto-refresh
                </button>
            </div>
        )
    }
}