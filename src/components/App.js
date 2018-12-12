import React from 'react';
import ImageList from "./ImageList";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    };

    render() {
        return (
            <div className='container'>
                <div>Top commended.</div>
                <ImageList/>
            </div>
        )
    }
}