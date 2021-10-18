import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import MyDeck from './components/MyDeck';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    const initialState = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
    this.state = {
      ...initialState,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
      nameSearchInput: '',
      rareSearchInput: 'todas',
      superTrunfoFilter: false,
    };
  }

  buttonValidation = () => {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const attributeMaxLimit = 90;
    const attributeMinLimit = 0;
    const attributeSumLimit = 210;
    const attrSum = parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10);
    if (
      cardName !== '' && cardImage !== '' && cardDescription !== ''
      && parseInt(cardAttr1, 10) >= attributeMinLimit
      && parseInt(cardAttr1, 10) <= attributeMaxLimit
      && parseInt(cardAttr2, 10) >= attributeMinLimit
      && parseInt(cardAttr2, 10) <= attributeMaxLimit
      && parseInt(cardAttr3, 10) >= attributeMinLimit
      && parseInt(cardAttr3, 10) <= attributeMaxLimit
      && attrSum <= attributeSumLimit
    ) {
      this.setState(() => ({
        isSaveButtonDisabled: false,
      }));
    } else {
      this.setState(() => ({
        isSaveButtonDisabled: true,
      }));
    }
  }

  trunfoChecker = () => {
    const { deck } = this.state;
    if (deck.some((card) => card.cardTrunfo)) {
      this.setState(() => ({
        hasTrunfo: true,
      }));
    } else {
      this.setState(() => ({
        hasTrunfo: false,
      }));
    }
  }

  inputChangesHandler = ({ target }) => {
    if (target.type === 'checkbox') {
      this.setState(() => ({
        [target.name]: target.checked,
      }));
    } else {
      this.setState(() => ({
        [target.name]: target.value,
      }), () => {
        this.buttonValidation();
      });
    }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState((current) => {
      const newCard = {
        cardName: current.cardName,
        cardDescription: current.cardDescription,
        cardAttr1: current.cardAttr1,
        cardAttr2: current.cardAttr2,
        cardAttr3: current.cardAttr3,
        cardImage: current.cardImage,
        cardRare: current.cardRare,
        cardTrunfo: current.cardTrunfo,
      };
      return ({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        deck: [...current.deck, newCard],
      });
    }, () => {
      this.trunfoChecker();
      this.buttonValidation();
    });
  }

  deleteCardButton = (name) => {
    this.setState((current) => ({
      deck: current.deck.filter((card) => card.cardName !== name),
    }), this.trunfoChecker);
  }

  // THANKS TO BRENO DA CUNHA, WHO HELPED ME A LOT TO DEVELOP THE LOGIC FOR THIS FILTER
  filter = () => {
    const { deck, nameSearchInput, rareSearchInput, superTrunfoFilter } = this.state;
    let filteredDeck = deck;
    if (superTrunfoFilter) {
      filteredDeck = deck
        .filter((card) => card.cardTrunfo);
    } else {
      if (nameSearchInput) {
        const deckFilteredByName = deck
          .filter((card) => card.cardName.toLowerCase()
            .includes(nameSearchInput.toLowerCase()));
        if (rareSearchInput !== 'todas') {
          filteredDeck = deckFilteredByName
            .filter((card) => card.cardRare === rareSearchInput);
        } else {
          filteredDeck = deckFilteredByName;
        }
      }
      if (rareSearchInput !== 'todas') {
        const deckFilteredByRare = deck
          .filter((card) => card.cardRare === rareSearchInput);
        if (nameSearchInput) {
          filteredDeck = deckFilteredByRare
            .filter((card) => card.cardName.toLowerCase()
              .includes(nameSearchInput.toLowerCase()));
        } else {
          filteredDeck = deckFilteredByRare;
        }
      }
    }
    return filteredDeck;
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, nameSearchInput,
      rareSearchInput, superTrunfoFilter } = this.state;

    return (
      <div>
        <header>
          <div id="out-circle">
            <div id="in-circle">
              <span id="text-logo">tryunfo</span>
            </div>
          </div>
          <h1 id="header-title">Project Tryunfo, by Lucas Loureiro.</h1>
        </header>
        <div className="form-preview-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.inputChangesHandler }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            className="card-preview"
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div>
          <div>
            <label htmlFor="filters">
              <span>Filtros de busca</span>
              <input
                type="text"
                id="filters"
                name="nameSearchInput"
                value={ nameSearchInput }
                placeholder="Nome da Carta"
                data-testid="name-filter"
                onChange={ this.inputChangesHandler }
              />
            </label>
            <select
              name="rareSearchInput"
              value={ rareSearchInput }
              data-testid="rare-filter"
              onChange={ this.inputChangesHandler }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
            <label htmlFor="superTrunfoFilter">
              <input
                type="checkbox"
                name="superTrunfoFilter"
                id="superTrunfoFilter"
                data-testid="trunfo-filter"
                value={ superTrunfoFilter }
                onChange={ this.inputChangesHandler }
              />
              <span>Super Trybe Trunfo</span>
            </label>
          </div>
          <MyDeck deck={ this.filter() } deleteButton={ this.deleteCardButton } />
        </div>
      </div>
    );
  }
}

export default App;
