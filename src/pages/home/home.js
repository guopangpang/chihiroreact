import React, {Component} from 'react'
import './home.scss'
import HomeItem from '../../components/homeItem/homeItem'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import GreatList from '../../components/great_list/great_list'
import withHeader from '../../withSubscription/withHeader'
import iiHOC from '../../withSubscription/inheritanceInversion'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            home_list:[],
            height:100,
            total:20,
            start:0,
            isloading:true,
            show_length:4,
            buffersize:4,
        }
    }
    componentDidMount(){
        this.get_home_data();
    }
    method =() =>{
        console.log('method',this.props);
    };
    onScroll = () =>{
        console.log('onScroll')
        if(this.state.isloading){
            this.get_home_data()
        }
    };
    get_home_data = () =>{
        this.setState({
            isloading:false
        },()=>{
            for(let i=this.state.start;i<this.state.start + this.state.show_length + this.state.buffersize;i++){
                let obj = {
                    title:'清华自动化机电学系',
                    info:'这里的专业为何数一数二，与北大的自动化有什么区别，听听师兄给你耐心解答听听师兄给你耐心解答听听师兄给你耐心解答',
                    name:'暗*月',
                    time:'2019年3月24',
                    good_present:'95%',
                    pay_person:i,
                    header_img:'../../image/image.jpg',
                    img:'../../image/image.jpg'
                };
                this.state.home_list.push(obj)
            }
            this.state.start = this.state.start + this.state.show_length + this.state.buffersize;
            this.setState({
                home_list:this.state.home_list,
                start:this.state.start
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        isloading:true
                    })
                },1000);
            });
        });
    };
    render(){
        return(
            <div className={'home_container'}>
                <Header/>
                <GreatList onScroll={this.onScroll} height={'8.5rem'} list={this.state.home_list}  buffersize={this.state.buffersize}
                           show_length={this.state.show_length} start={this.state.start} item={HomeItem}>
                </GreatList>
                <Footer home_props={this.props}/>
            </div>
        )
    }
}

// const EnhanceDemo = withHeader(Home,'aaa');
// const EnhanceDemo = iiHOC(Home);
// export default EnhanceDemo
export default Home
