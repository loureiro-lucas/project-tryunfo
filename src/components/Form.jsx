import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form id="new-card">
        <h1 className="form-title">Adicione uma nova carta!</h1>
        <label htmlFor="name-input" id="name-label">
          <span>Nome: </span>
          <input
            type="text"
            name="cardName"
            id="name-input"
            value={ cardName }
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input" id="description-label">
          <span>Descrição: </span>
          <textarea
            name="cardDescription"
            id="description-input"
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
            cols="30"
            rows="5"
          />
        </label>

        <label htmlFor="attr1-input" className="attribute-label">
          <span>Velocidade: </span>
          <input
            type="number"
            name="cardAttr1"
            id="attr1-input"
            value={ cardAttr1 }
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input" className="attribute-label">
          <span>Popularidade: </span>
          <input
            type="number"
            name="cardAttr2"
            id="attr2-input"
            value={ cardAttr2 }
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input" className="attribute-label">
          <span>Versatilidade: </span>
          <input
            type="number"
            name="cardAttr3"
            id="attr3-input"
            value={ cardAttr3 }
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input" id="image-label">
          <span>Link para imagem: </span>
          <input
            type="text"
            name="cardImage"
            id="image-input"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>

        <div id="rare-trunfo-container">
          <label htmlFor="cardRare" className="rare-label">
            <select
              name="cardRare"
              id="rare-input"
              value={ cardRare }
              data-testid="rare-input"
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          {!hasTrunfo
            ? (
              <label htmlFor="trunfo-input" className="trunfo-input-label">
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  id="trunfo-input"
                  checked={ cardTrunfo }
                  data-testid="trunfo-input"
                  onChange={ onInputChange }
                />
                <span>Super Trunfo</span>
              </label>
            ) : <span id="has-trunfo">Você já tem um Super Trunfo em seu baralho</span>}
        </div>

        <button
          type="submit"
          id="save-button"
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
