import React from 'react';
import ImageList from "./ImageList";
import Header from "./Header";

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
        const {images}=this.state;

        return (
            <div className='container'>
                <Header autoRefresh={this.autoRefresh}/>
                <ImageList images={images}/>
            </div>
        )
    }
}