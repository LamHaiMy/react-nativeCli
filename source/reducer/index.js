const {createStore} = require('redux');

const defaulState = {
  listItem: [
    {
      imageUrl: 'aaaaa',
      productName: 'ABC product',
      subTitle: ' limited sub',
      detailLink: 'link detail'
    },
    {
      imageUrl: 'aaaaa',
      productName: 'ABC product',
      subTitle: ' limited sub',
      detailLink: 'link detail'
    },
    {
      imageUrl: 'aaaaa',
      productName: 'ABC product',
      subTitle: ' limited sub',
      detailLink: 'link detail'
    },
    {
      imageUrl: 'aaaaa',
      productName: 'ABC product',
      subTitle: ' limited sub',
      detailLink: 'link detail'
    },
    {
      imageUrl: 'aaaaa',
      productName: 'ABC product',
      subTitle: ' limited sub',
      detailLink: 'link detail'
    },
    {
      imageUrl: 'aaaaa',
      productName: 'ABC product',
      subTitle: ' limited sub',
      detailLink: 'link detail'
    },
    {
      imageUrl: 'aaaaa',
      productName: 'ABC product',
      subTitle: ' limited sub',
      detailLink: 'link detail'
    },
    {
      imageUrl: 'aaaaa',
      productName: 'ABC product',
      subTitle: ' limited sub',
      detailLink: 'link detail'
    },
    {
      imageUrl: 'aaaaa',
      productName: 'ABC product',
      subTitle: ' limited sub',
      detailLink: 'link detail'
    },
  ]
};
const reducer = (state = defaulState, action) => {
  // if(action.type === CHANGE) return {value: state.value + 1}
  return state;
};

const store = createStore(reducer);

const myState = store.getState();
