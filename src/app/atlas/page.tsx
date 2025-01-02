import BackButton from "@/components/BackButton"

const page = () => {
    return (
        <div className="w-[800px] py-20">
            <div className="flex flex-col gap-20 px-5">
                <BackButton />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">Atlas</p>
                        <p className="font-semibold text-base text-systemGray">Founder</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default page