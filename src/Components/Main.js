import React, {Component} from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
import { strictEqual } from 'assert';
import {removePost} from '../redux/actions'
import Single from './Single'

class Main extends Component{

    state = { loading: true }

    componentDidMount(){
        this.props.startLoadingPost().then(()=> {
            this.setState({loading:false})
        })
        this.props.startLoadingComments()
    }


    render(){
        console.log(this.props)
        return (
            <div> 
                <h1> 
                    <Link to='/'> Photowall</Link>
                </h1>
                <Route exact path='/' render={() => (
                    <div>                        <PhotoWall {...this.props}/>
                    </div>
                )} />
                 <Route path='/AddPhoto' render = {({history}) => (
                        <AddPhoto {...this.props}/>
                 )}/>

                 <Route path = '/single/:id' render={(params) => (
                     <Single loading={this.state.loading} {...this.props} {...params} />
                 )}></Route>
            </div>)
    }

}


export default Main