import { getShoppingCart } from "../utilities/fakedb";

const loadCartData = async () => {
    const loadedData = await fetch('products.json');
    const products = await loadedData.json();
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
        const adededProducts = products.find(pd => pd.id === id);
        if (adededProducts) {
            const quantity = storedCart[id];
            adededProducts.quantity = quantity;
            savedCart.push(adededProducts);
        }
    }
    return savedCart;
};

export default loadCartData;