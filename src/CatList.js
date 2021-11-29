// write your CatList component here
import React from 'react';

class CatList extends React.Component {
  listCats = () => {
    return  this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
  }

  render() {
    return (
      this.props.loading ? <div>Loading...</div> : <div>{ this.listCats() }</div>
    )
  }
}

export default CatList