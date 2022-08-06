import React, { useState } from 'react'
import { useGlobal } from "../../GlobalState/GlobalStateContext";
import ModalSelectionBox from '../ModalSelectionBox/modalSelectionBox';
import { 
    PriceAndButtonBox,
    ProductCardContainer, 
    ProductDescription, 
    ProductImage, 
    ProductInfoBox, 
    ProductAddButton, 
    ProductRemovalButton,
    QuantityBox,
    ProductName, 
    ProductNameAndQuantityBox,
    ProductPriceInfo,

} from './style';

const RestaurantProductCard = ( { product, restaurant } ) => {
    const [openModalSelectionBox, setOpenModalSelectionBox] = useState(false)
    const { states } = useGlobal();
    const { requests } = useGlobal()
    const { addProductToCart, removeProductInCart } = requests;
    const { cart } = states

    const quantityChoice = (quantity) => {
        addProductToCart(product, quantity, restaurant)
        setOpenModalSelectionBox(false)
    }

    const checkProductInCart = cart.find((productCart) => productCart.id === product.id)

    return (
        <ProductCardContainer>
            <ProductImage src={product.photoUrl}/>
            <ProductInfoBox>

                <ProductNameAndQuantityBox>
                    <ProductName> {product.name} </ProductName>
                    {checkProductInCart && <QuantityBox> {checkProductInCart.quantity} </QuantityBox>}
                </ProductNameAndQuantityBox>

                <ProductDescription>
                    {product.description}
                </ProductDescription>

                <PriceAndButtonBox>
                    <ProductPriceInfo>
                        R${product.price}
                    </ProductPriceInfo>
                    {
                        checkProductInCart?
                        <ProductRemovalButton onClick = {() => removeProductInCart(product.id)}>
                            Remover
                        </ProductRemovalButton>
                        :
                        <ProductAddButton onClick = {() => setOpenModalSelectionBox(true)}>
                            Adicionar
                        </ProductAddButton>
                    }
                </PriceAndButtonBox>

                <ModalSelectionBox 
                openModal={openModalSelectionBox} 
                setOpenModal={setOpenModalSelectionBox}
                quantityChoice={quantityChoice}
                />

            </ProductInfoBox>
        </ProductCardContainer>
    )
}

export default RestaurantProductCard;