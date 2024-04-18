// actions/carrinhoActions.js

export const adicionarItem = (produto) => ({
  type: 'ADICIONAR_ITEM',
  payload: produto
});

export const removerItem = (index) => ({
  type: 'REMOVER_ITEM',
  payload: index
});
