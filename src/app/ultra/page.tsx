import BackButton from "@/components/BackButton"
import Image from "next/image"

const page = () => {
    return (
        <div className="w-[800px] py-20">
            <div className="flex flex-col gap-20 px-5">
                <BackButton />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">Almaden Hills Trail Run</p>
                        <p className="font-semibold text-base text-systemGray">51 km ultramarathon with 8,600 ft. of elevation</p>
                    </div>
                    <div className="flex w-full justify-center rounded-md py-10">
                        <div className="relative flex items-center w-[250px] h-[500px]">
                            <Image
                                className="rounded-md"
                                fill
                                src="/almadenUltra.JPG"
                                alt="marathon"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page