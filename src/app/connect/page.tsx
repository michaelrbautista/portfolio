import BackButton from "@/components/BackButton"

const Connect = () => {
    return (
        <div className="w-full sm:max-w-md py-20">
            <div className="flex flex-col gap-10 px-5 sm:px-0">
                <BackButton />
                <div className="flex flex-col gap-5">
                    <p className="font-semibold text-base">Connect</p>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between sm:gap-10 py-[10px]">
                            <div className="sm:w-[100px] shrink-0">
                                <p className="text-sm text-systemGray">Email</p>
                            </div>
                            <div className="w-full">
                                <p className="text-sm font-medium">michaelrebautista@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between sm:gap-10 py-[10px]">
                            <div className="sm:w-[100px] shrink-0">
                                <p className="text-sm text-systemGray">LinkedIn</p>
                            </div>
                            <div className="w-full">
                                <p className="text-sm font-medium">www.linkedin.com/in/michaelrebautista</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between sm:gap-10 py-[10px]">
                            <div className="sm:w-[100px] shrink-0">
                                <p className="text-sm text-systemGray">Github</p>
                            </div>
                            <div className="w-full">
                                <p className="text-sm font-medium">www.github.com/michaelrbautista</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Connect