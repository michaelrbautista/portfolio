import BackButton from "@/components/BackButton"

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
                    
                </div>
            </div>
        </div>
    )
}
export default page