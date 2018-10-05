import React, {Component} from 'react';

class ComponentWithInput extends Component {
  render() {
    const {onSearchInput} = this.props;

    return (
      <div className='utils'>
        <input id='search' type="text" placeholder="Search.." onChange={(e) => onSearchInput(e)}/>
      </div>

    )
  }
}

export default ComponentWithInput