export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => Number(item.price) + amount, 0)