import React from 'react';
import ImageList from "./ImageList";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [],
            refreshStatus: false
        };
    };

    getImages = () => {
        this.setState({
           images: []
        });

        const link='https://www.reddit.com/r/aww.json';

        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(result => {
                    this.setState({
                        images: result.data.children
                    })
                }
            )
    };

    autoRefresh = () => {
        !this.state.refreshStatus ? (
            this.timerID = setInterval(this.getImages, 3000)
        ) : (clearInterval(this.timerID));

        this.setState(prevState => ({
                refreshStatus: !prevState.refreshStatus
            }
        ))
    };

    componentDidMount() {
        this.getImages()
    };

    render() {
        const {images, refreshStatus}=this.state;

        return (
            <div className='container'>
                <h1 className='top-color'>Top commented.</h1>
                <button
                    type='button'
                    className='btn btn-sm'
                    onClick={this.autoRefresh}
                >
                    Start auto-refresh
                </button>
                <ImageList images={images} refreshStatus={refreshStatus}/>
            </div>
        )
    }
}