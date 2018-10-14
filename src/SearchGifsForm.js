import React, {Component} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction:column;
  width: 20%;
  margin:0px auto;
  justify-content: center;
  height: 20vh;
`

const StyledInput = styled.input`
  height: 3vh;
  font-size: 12px;
  outline: none;
`
class SearchGifsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm:''
    };
  }


  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    console.log('inside submit')
    e.preventDefault();
    this.props.findGifs(this.state.searchTerm)
  }

  render() {
    return(
      <StyledForm onSubmit = {this.handleSubmit}>
        <StyledInput onChange={this.handleChange} type="text" name='searchTerm'/>
        <button>Search for some GIFS!</button>
      </StyledForm>
    )
  }
}

export default SearchGifsForm;