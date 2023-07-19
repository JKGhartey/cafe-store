import getBillboard from '@/actions/get-billboard'
import getBillboardId from '@/actions/get-billboard-id'
import getProducts from '@/actions/get-products'
import ProductList from '@/components/product-list'
import Billboard from '@/components/ui/billboard'
import {ContainerLarge} from '@/components/ui/container'

export const revalidate = 0



const HomePage = async () => {

    const billboardId = await getBillboardId()
    const billboard = await getBillboard(billboardId)

    console.log(billboard)

    const products = await getProducts({ isFeatured: true })
    return (
        <ContainerLarge>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="text-center max-w-[800px] mx-auto px-6 my-[50px] md:my-[80px]">
                    <div className="text-[34px] md:text-[34px] mb-5 font-bold leading-tight">
                        Taste the World: Your Global Cafe Delivered
                    </div>
                    <div className="text-md md:text-xl">
                        Savor Extraordinary Flavors - Explore a World of Coffee and Cuisine at our Online Cafe Emporium!
                    </div>
                </div>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-9">
                    <ProductList title="Featured Products" items={products} isHomepage={true} />
                </div>
            </div>
        </ContainerLarge>
    )
}

export default HomePage