import React,{Component} from 'react';

class Home extends Component({
  render: function() {
    return (
      <div className="home-page">
        <h1>This app is using Redux with React</h1>
        <p>
          Trying to mutate from ES5 to ES6
        </p>
      </div>
    );
  }
});

export default Home;
