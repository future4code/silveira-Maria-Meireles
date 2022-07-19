import SellerModel from "../Models/SellerModel";
import BaseDatabase from "./BaseDatabase";

export default class SellerDatabase extends BaseDatabase{
    private tableName = "amaro_sellers"
    
    insertSeller = async(seller: SellerModel): Promise<void> => {
        try{
            await this.getConnection()
            .insert({
                id: seller.getSellersId(),
                name: seller.getSellersName(),
                email: seller.getSellersEmail(),
                password: seller.getSellersPassword()
            })
            .into(this.tableName)
        } catch(error: any) {
           console.log("????")
        }
    }

    getSellerByEmail = async(email: string): Promise<SellerModel | undefined> => {
        try {
            const [verificationResult] = await this.getConnection()
            .select("*")
            .from(this.tableName)
            .where({email})

            return verificationResult
        } catch (error: any) {
            console.log("???")
        }
    }
}