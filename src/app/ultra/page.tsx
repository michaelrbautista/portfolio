import BackButton from "@/components/BackButton"
import BlurImage from "@/components/BlurImage"

const page = () => {
    return (
        <div className="w-full sm:max-w-md py-20">
            <div className="flex flex-col gap-10 px-5 sm:px-0">
                <BackButton />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">Almaden Hills Trail Run</p>
                        <p className="font-semibold text-base text-systemGray">32 mile ultramarathon with 8,691 ft. of elevation</p>
                    </div>
                    <div className="flex w-full justify-center rounded-md py-10">
                        <div className="relative flex items-center w-[275px] h-[600px] shrink-0">
                            <BlurImage
                                alt="marathon"
                                src="https://ltjnvfgpomlatmtqjxrk.supabase.co/storage/v1/object/public/landing_page//almadenUltra.JPG"
                                contentMode="contain"
                                sizes="275px"
                                className="rounded-md"
                                canSelect={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page