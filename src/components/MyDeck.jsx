import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class MyDeck extends React.Component {
  render() {
    const { deck, deleteButton } = this.props;

    return (
      <ol>
        {
          deck.map((card, index) => (
            card.cardName.includes('') && (
              <div
                key={ index }
              >
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => deleteButton(card.cardName) }
                >
                  Excluir
                </button>
              </div>)))
        }
      </ol>
    );
  }
}

MyDeck.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteButton: PropTypes.func.isRequired,
};

export default MyDeck;
