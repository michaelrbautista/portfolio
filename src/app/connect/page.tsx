import BackButton from "@/components/BackButton"

const Connect = () => {
    return (
        <div className="w-full sm:w-[800px] py-20">
            <div className="flex flex-col gap-20 px-5">
                <BackButton />
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-2xl">Connect</p>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between sm:gap-10 py-[10px]">
                            <div className="sm:w-[250px] shrink-0">
                                <p className="text-systemGray">Email</p>
                            </div>
                            <div className="w-full">
                                <p className="font-bold">michaelrebautista@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between sm:gap-10 py-[10px]">
                            <div className="sm:w-[250px] shrink-0">
                                <p className="text-systemGray">LinkedIn</p>
                            </div>
                            <div className="w-full">
                                <p className="font-bold">www.linkedin.com/in/michaelrebautista</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between sm:gap-10 py-[10px]">
                            <div className="sm:w-[250px] shrink-0">
                                <p className="text-systemGray">Github</p>
                            </div>
                            <div className="w-full">
                                <p className="font-bold">www.github.com/michaelrbautista</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Connect