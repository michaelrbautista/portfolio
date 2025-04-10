import BackButton from "@/components/BackButton"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const page = () => {
    return (
        <div className="w-full sm:max-w-lg py-20">
            <div className="flex flex-col gap-10 px-5 sm:px-0">
                <BackButton />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col">
                        <p className="font-semibold text-base">Daily</p>
                        <p className="text-sm text-systemGray">Running accountability</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {/* <Link className="flex flex-row items-center gap-1" href="" target="_blank" rel="noopener noreferrer">
                            <ArrowUpRight size={20} color="white" />
                            <p>iOS App Store</p>
                        </Link> */}
                        <div className="flex flex-row items-center gap-1">
                            <ArrowUpRight size={20} color="#8E8E93" />
                            <p className="text-[#8E8E93]">iOS App Store (in review)</p>
                        </div>
                        <Link className="flex flex-row items-center gap-1" href="https://github.com/michaelrbautista/Daily" target="_blank" rel="noopener noreferrer">
                            <ArrowUpRight size={20} color="white" />
                            <p>Github</p>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold">Why</h1>
                            <div className="flex flex-col gap-5">
                                <p className="text-sm">
                                Consistency compounds. Visualizing consistency helps me stay accountable, so I made an app 
                                that does that with run data.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold">What</h1>
                            <div className="flex flex-col gap-5">
                                <p className="text-sm">
                                Daily is an iOS app that imports and visualizes your run data. My Github contribution graph 
                                motivates me to push code more consistently, so the main feature of the app is a similar graph 
                                that shows how consistent you’ve been with your runs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page