import React, {Component} from 'react'
import './great_list.scss'

class GreatList extends Component{
    constructor(props){
        super(props);
        this.state = {
            great_list:''
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    onScroll = () =>{
        let scrollHeight = this.state.great_list.scrollHeight;
        let offsetHeight = this.state.great_list.offsetHeight;
        let scrollTop = this.state.great_list.scrollTop;
        if((scrollHeight - offsetHeight - scrollTop)<this.props.height){
            this.props.onScroll()
        }
    };
    render() {
        let show_list = [];
        console.log(11,this.props.list.slice(this.props.start - this.props.show_length,this.props.start));
        show_list = this.props.list.slice(this.props.start - this.props.show_length,this.props.start)

        return (
            <div className={'great_list_container'} onScrollCapture={this.onScroll} ref={(great_list)=>{this.state.great_list= great_list}}>
                {
                    show_list.map((item,index)=>{
                        return <this.props.item key={index} item={item}/>
                    })
                }
            </div>
        )
    }
}

export default GreatList