import { productDetails } from '../../types/productDetails'

export const listData = (item: any) => {
  return (
    {
      type: 'SET_LIST',
      payload: item,
    }
  )
};


export const detailsData = (item: productDetails) => {
  return (
    {
      type: 'SET_DETAILS',
      payload: item,
    }
  )
};
