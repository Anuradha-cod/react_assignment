import React from "react";

export default class Block extends React.Component{
    render() {
        return (
            <div className="block">
        <p>{this.props.items.publishDate}</p>
        <h2>{this.props.items.title}</h2>
        <img src={this.props.items.imageUrl} style={{width: "100%", height: "60%"}}/> 
        <p>{this.props.items.description}</p>
            </div>
        )
    }
}