# Project Tryunfo 🚀

That's the second project of **Front-end** module of Trybe course.

The objective was to use our new React skills to develop form a to create a Super Trunfo card game deck, using **state**, **props**, **nesting** and **event handlers**.

As well as hard skills, I could work my **soft skills**, specially **time management**.

`Mandatory Requirements:`

- 1 - Create a `form` tha will be used to create the cards for your deck.
  * Create a `Form` component in `src/components`.
  * Render the `Form` component inside the main `App` one. 
  * Create these itens inside the `Form`:
    - a `text` input to enter the name of the card.
    - a `textarea` field to enter the card description.
    - 3 `number` inputs to enter 3 card attributes.
    - a `text` input to enter the card image URL.
    - a `select` input to enter the card rarity, with the `options`: `normal`, `raro` e `muito raro`, in this order.
    - a `checkbox` input to enter if the card is a Super Trunfo one.
    - a `button` with the text "Salvar".

- 2 - Add the necessary props to the `Form` component. 
    - `cardName`, string;
    - `cardDescription`, string;
    - `cardAttr1`, string;
    - `cardAttr2`, string;
    - `cardAttr3`, string;
    - `cardImage`, string;
    - `cardRare`, string;
    - `cardTrunfo`, boolean;
    - `hasTrunfo`, boolean;
    - `isSaveButtonDisabled`, boolean;
    - `onInputChange`, callback;
    - `onSaveButtonClick`, callback;

- 3 - Crieate and render the `Card` component with the necessary props.
    - `cardName`, string;
    - `cardDescription`, string;
    - `cardAttr1`, string;
    - `cardAttr2`, string;
    - `cardAttr3`, string;
    - `cardImage`, string;
    - `cardRare`, string;
    - `cardTrunfo`, boolean;

- 4 - Create a card preview

- 5 - Create a validation for the button, that should be disabled until `name`, `description`, `image` and `rarity` fields get filled.

- 6 - Create a save function for the button

- 7 - Create a Super Trunfo validation. There must be only 1 Super Trunfo card in the deck. In this case, the text "Você já tem um Super Trunfo em seu baralho" must be rendered insted of the checkbox input.

- 8 - Render the deck saved on the `App` state.

- 9 - Create a button to remove a card from the deck.

`Bonus requirements`
  
- 10 - Create a name filter.

- 11 - Create a rarity filter tha work simultaneously with the name filter.

- 12 - Create `checkbox` a Super Trunfo filter, that works independently of other ones.
