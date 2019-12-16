import React, {Component} from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class PhotoWall extends Component{
    render(){
        return (
            <div>
                <Link className="addIcon" to="/AddPhoto">  </Link>
                <div className="photoGrid">
                    {this.props.posts.map((post, index) => <Photo key={index}post = {post} onRemovePhoto={this.props.onRemovePhoto}/>)}
                </div>
            </div>)
    }
}

//To indicate required props and their types
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall