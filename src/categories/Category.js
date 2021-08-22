import React from 'react'
import { ProductAPI } from './ProductAPI'
import Product from './Product'
import { useParams } from 'react-router'

const Category = () => {
    const { category } = useParams()

    const object_of_products = ProductAPI.find((value) => value.product_param === category)

    const images = ["https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/Aug/BBD/new/PC_BUNK_3000x1200._CB643828341_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/RedmiNote10S/GW/August/Gaming/D23007216_WLD_Xiaomi_RedmiNote10S_NewLaunch_tallhero_3000x1200_2._CB643943911_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/AUG/1._CB644031110_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x1200._CB669031984_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/B_3000x1200._CB643879457_.jpg"]

    const random_image = Math.floor(Math.random() * (images.length - 1))

    return (
        <div className="category-div">
            <img className="product_image" src={images[random_image]} alt="" />

            <div className="product-info">
                {
                    object_of_products.product_data.map((value) => <Product key={value.id} detail={value} />)
                }
            </div>
        </div>
    )
}

export default Category;
