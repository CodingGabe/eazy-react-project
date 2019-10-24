import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [
    //   {
    //     name: "Gabe",
    //     job: "Front-End Web Developer"
    //   },
    //   {
    //     name: "Sarah",
    //     job: "Graphics Designer"
    //   },
    //   {
    //     name: "Mitchell",
    //     job: "Marketing Director"
    //   },
    //   {
    //     name: "Sam",
    //     job: "Trader"
    //   },
    //   {
    //     name: "Taylor",
    //     job: "Sr. Web Developer"
    //   }
    ]
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
      this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
          <h1>Eazy learning React Add and Remove app</h1>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
