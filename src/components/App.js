import 'rc-slider/assets/index.css';
import React from 'react';
import ImageList from "./ImageList";
import Header from "./Header";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            imageList: [],
            sliderValue:0,
            refreshStatus: false
        };
    };

    getImages = () => {
        this.setState({
            imageList: []
        });

        const link='https://www.reddit.com/r/aww.json';

        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(result => {
                    this.setState({
                        imageList: result.data.children
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
        }))
    };

    onSliderChange = (value) => {
        this.setState({
            sliderValue: value
        })
    };

    componentDidMount() {
        this.getImages()
    };

    render() {
        const {imageList, sliderValue}=this.state;

        return (
            <div className='container'>
                <Header autoRefresh={this.autoRefresh} onSliderChange={this.onSliderChange} sliderValue={sliderValue}/>
                <ImageList imageList={imageList} sliderValue={sliderValue}/>
            </div>
        )
    }
}