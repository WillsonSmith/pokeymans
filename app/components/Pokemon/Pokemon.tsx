import * as React from 'react';

interface Props {
  pokemon: any
}

interface Species {
  evolvesFromSpecies: {};
  evolvesIntoSpecies: any;
  identifier: string;
}

interface Pokemon {
  id: number;
  height: number;
  weight: number;
  pokemonTypes: {};
  species: Species;
  sprites: {};
}

class Pokemon extends React.PureComponent<Props> {
  pokemon: any;

  constructor(props) {
    super(props);
    const { id, height, weight, pokemonTypes, species, sprites } = this.props.pokemon;
    this.pokemon = {
      id, height, weight, pokemonTypes, species, sprites
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.pokemon.species.identifier}</div>
        <div><img src={this.pokemon.sprites.normal.male.front} /></div>
      </React.Fragment>
    )
  }
}

export default Pokemon;
