import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.search);
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="field">
            <div className={`control is-large ${this.props.loading && 'is-loading'}`}>
              <input
                className="input is-large"
                onChange={(e) => this.setState({ search: e.target.value })}
                placeholder="Search"
                type="text"
              />
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SearchForm;
