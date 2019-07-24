import React from 'react';


class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
  };

  onFormSubmit = (event) => {
    // Prevent term from being submitted when taping 'enter'
    event.preventDefault();
    console.log(`Submitting: ${this.state.term}`);
    // TODO: call callback from parent component (App)
  };

  render() {

    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}


export default SearchBar;