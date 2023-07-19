import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
    title: string;
    items: Product[]
    isHomepage?: boolean
}

const ProductList: React.FC<ProductListProps> = ({
    title, items, isHomepage
}) => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title} </h3>
            {items.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {items.map((item) => (
                    <ProductCard key={item.id} data={item} isHomepage={true}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList