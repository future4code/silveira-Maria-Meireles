import React, { useState } from 'react'
import ModalSelectionBox from '../ModalSelectionBox/modalSelectionBox';
import { 
    PriceAndButtonBox,
    ProductCardContainer, 
    ProductDescription, 
    ProductImage, 
    ProductInfoBox, 
    ProductInformButton, 
    ProductName, 
    ProductNameAndQuantityBox,
    ProductPriceInfo,

} from './style';

const RestaurantProductCard = ( { product } ) => {
    const [openModalSelectionBox, setOpenModalSelectionBox] = useState(false)

    return (
        <ProductCardContainer>
            <ProductImage src={product.photoUrl}/>
            <ProductInfoBox>

                <ProductNameAndQuantityBox>
                    <ProductName> {product.name} </ProductName>
                </ProductNameAndQuantityBox>

                <ProductDescription>
                    {product.description}
                </ProductDescription>

                <PriceAndButtonBox>
                    <ProductPriceInfo>
                        R${product.price}
                    </ProductPriceInfo>

                    <ProductInformButton onClick = {() => setOpenModalSelectionBox(true)}>
                        Adicionar
                    </ProductInformButton>
                </PriceAndButtonBox>

                <ModalSelectionBox openModal={openModalSelectionBox} setOpenModal={setOpenModalSelectionBox}/>

            </ProductInfoBox>
        </ProductCardContainer>
    )
}

export default RestaurantProductCard;