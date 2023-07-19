import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
    data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 overflow-hidden">
            <div
                className="aspect-square md:aspect-auto md:h-[62vh] relative"
                style={{ backgroundImage: `url(${data?.imageUrl})`, backgroundPosition: "center", backgroundSize: "cover" }}
            >
                <div className=" flex items-center justify-center p-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[14%] h-[3.5rem] w-[40%] md:h-auto md:w-[15rem] text-center md:bottom-[75px] left-0 text-black/[0.9] text-[20px] md:text-[30px] uppercase font-semibold">
                    {data.label}
                </div>
            </div>
        </div>
    );
};

export default Billboard;