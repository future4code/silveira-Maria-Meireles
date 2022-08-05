import { Button } from '@mui/material'
import React from 'react'

const CartCard = ({ product }) => {
    return (
        <div>
            <div>
                <img src={product.photoUrl}/> 
            </div>

            <div>
                <div>
                    <p> {product.name} </p>
                    <p> {product.amount} </p>  
                </div>

                <div>
                    <p> {product.description} </p> 
                </div> 

                <div>
                    <p>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(product.price)}
                    </p> 
                    <Button> Remover </Button> 
                </div>
            </div>
        </div>
    )
}