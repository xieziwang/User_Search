import React from 'react';

export default React.createClass({

  getQuery() {
    return this.refs.search.value;
  },

  render() {
    return (
      <form onSubmit={this.props.search} className="search">
        <input type="text" ref="search" placeholder="Search" />
        <button>Search</button>
      </form>
    );
  }

});
