import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      className,
    } = this.props;
    return (
      <div className={ className }>
        <div id="out-card">
          <div id="mid-card">
            <div id="in-card">
              <h1 data-testid="name-card">{ cardName }</h1>
              <img src={ cardImage } alt={ cardName } data-testid="image-card" />
              <p id="card-descrip" data-testid="description-card">{ cardDescription }</p>
              <div id="card-attr-rare-trunfo-container">
                <div id="card-attr-container">
                  <p className="card-attr" data-testid="attr1-card">Velocidade: { cardAttr1 }</p>
                  <p className="card-attr" data-testid="attr2-card">Popularidade: { cardAttr2 }</p>
                  <p className="card-attr" data-testid="attr3-card">Versatilidade: { cardAttr3 }</p>
                </div>
                <div id="card-rare-trunfo-container">
                  <p id="card-rare" data-testid="rare-card">{ cardRare }</p>
                  {cardTrunfo && <p id="card-trunfo" data-testid="trunfo-card">Super Trunfo</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default Card;
