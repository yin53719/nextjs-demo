import React from 'react'

class Hello extends React.Component {
  static async getInitialProps(ctx) {
     
    
    return { stars: 1111 }
  }
 
  render() {
    
    return <div>Next 1111stars: {this.props.stars}</div>
  }
}

export default Hello