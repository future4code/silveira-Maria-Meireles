import express, {Request, Response} from 'express'
import cors from 'cors'
import { productsList, Product } from './data'

const app = express();
app.use(express.json());
app.use(cors());

const newProductsList: Array<Product> = productsList

app.get("/teste", (req: Request, res: Response) => {
    res.status(200).send({message: "Testando 1, 2, 3.... Funcionouuuu!"})
})

app.post( "/createProduct", (req:Request, res:Response) => {
    const newProduct: Product = {
        id: String(Date.now()),
        name: req.body.name,
        price: req.body.price
    }
    newProductsList.push(newProduct);

    res.status(201).send({message: "Produto criado!"})
})

app.get("/getAllProducts", (req: Request, res: Response) => {
    res.status(200).send((newProductsList))
})

app.put("/changeProductPrice", (req: Request, res: Response) => {
    const productId: string = req.query.id as string
    const newPrice: number = +req.body.price

    const updatedList = newProductsList.map((product) => {
        if(product.id === productId) {
            return {...product, price: newPrice}
        } else {
            return product;
        }
    })
    res.status(201).send({message: "Preço alterado com sucesso!", data: (updatedList)})
})

app.delete( "/deleteProduct", (req: Request, res: Response) => {
    const productId: string = req.query.id as string

    const updatedList = newProductsList.filter((product) => {
        if(product.id !== productId) {
            return product
        }
    })

    res.status(200).send({message: "Produto deletado!", data: updatedList})
})
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})