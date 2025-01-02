import BackButton from "@/components/BackButton"

const page = () => {
    return (
        <div className="w-[800px] py-20">
            <div className="flex flex-col gap-20 px-5">
                <BackButton />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">2023 San Francisco Marathon</p>
                        <p className="font-semibold text-base text-systemGray">26.2 miles with 1,300 ft. of elevation</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default page