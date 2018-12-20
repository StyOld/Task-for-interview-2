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
            refreshStatus: false,
            isLoading: false
        };
    };

    getImages = () => {
        this.setState(({
            isLoading: true
        }), () => {
            fetch('https://www.reddit.com/r/aww.json')
                .then(response => {
                    return response.json();
                })
                .then(result => {
                    this.setState({
                        imageList: result.data.children,
                        isLoading: false
                    })
                })
        });
    };

    autoRefresh = () => {
        this.setState(prevState => ({
            refreshStatus: !prevState.refreshStatus
        }), () => {
            this.state.refreshStatus ? (
                this.timerID = setInterval(this.getImages, 3000)
            ) : (clearInterval(this.timerID));
        })

        // !this.state.refreshStatus ? (
        //     this.timerID = setInterval(this.getImages, 3000)
        // ) : (clearInterval(this.timerID));
        //
        // this.setState(prevState => ({
        //     refreshStatus: !prevState.refreshStatus
        // }))
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
        const {imageList, sliderValue, isLoading}=this.state;

        return (
            <div className='container'>
                <Header autoRefresh={this.autoRefresh} onSliderChange={this.onSliderChange} sliderValue={sliderValue}/>
                {!isLoading ? (<ImageList imageList={imageList} sliderValue={sliderValue}/>) : (<h2><b>Loading...</b></h2>)}
            </div>
        )
    }
}