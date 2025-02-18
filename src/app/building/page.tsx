import BackButton from "@/components/BackButton"

const page = () => {
    return (
        <div className="w-full sm:max-w-md py-20">
            <div className="flex flex-col gap-10 px-5 sm:px-0">
                <BackButton />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col">
                        <p className="font-semibold text-base">Building</p>
                        <p className="text-sm text-systemGray">Coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page