import { Component } from 'react';
import { Search } from './Search/Search';
import { ContentInfo } from './ContentInfo/ContentInfo';

export class App extends Component {
  state = {
    searchText: '',
  };

  handleSearch = searchText => {
    this.setState({
      searchText,
    });
  };

  render() {
    return (
      <div
        style={{
        
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          color: '#010101',
        }}
      >
        <Search handleSearch={this.handleSearch} />
        <ContentInfo searchText={this.state.searchText} />
      </div>
    );
  }
}
