"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ProductCard {
    data: Product
    isHomepage?: boolean
}

const ProductCard: React.FC<ProductCard> = ({
    data, isHomepage
}) => {
    const previewModal = usePreviewModal();
    const cart = useCart();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    };

    const price = parseFloat(data.price)
    const wholeNumber = Math.floor(price);
    const decimal = Number((price - wholeNumber).toFixed(2)) * 100;

    return (
        <>
            <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 ">
                {/* Image & actions */}
                <div className="aspect-square rounded-xl bg-gray-100 relative">
                    <Image
                        src={data.images?.[0]?.url}
                        alt=""
                        fill
                        className="aspect-square object-cover rounded-md"
                    />
                    <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                        <div className="flex gap-x-6 justify-center">
                            <IconButton
                                onClick={onPreview}
                                icon={<Expand size={20} className="text-gray-600" />}
                            />

                        </div>
                    </div>

                </div>
                {/* Description */}
                <div className="px-3 pt-4">
                    <h5 className="text-xl tracking-tight text-black font-semibold">{data.name} </h5>
                </div>

                {isHomepage && (
                    <>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-3xl font-bold text-black">${wholeNumber}</span>
                                <span className="text-sm text-black">.{decimal === 0 ? "00" : decimal}</span>
                            </p>
                        </div>


                        <div className="px-2">
                            <span onClick={onAddToCart} className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                <ShoppingCart className="mr-4" />
                                <p className="text-base font-semibold">Add to cart</p>
                            </span>
                        </div>
                    </>
                )}

            </div >
        </>
    );
}

export default ProductCard;