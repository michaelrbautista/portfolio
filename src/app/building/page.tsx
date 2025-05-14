import BackButton from "@/components/BackButton"
import { ArrowUpRight } from "lucide-react"

const page = () => {
    return (
        <div className="w-full sm:max-w-lg py-20">
            <div className="flex flex-col gap-10 px-5 sm:px-0">
                <BackButton />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col">
                        <p className="font-semibold text-base">Motive</p>
                        <p className="text-sm text-systemGray">Motivational Widgets</p>
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
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold">Why</h1>
                            <div className="flex flex-col gap-5">
                                <p className="text-sm">
                                The top motivational quotes app on the iOS App Store makes $200K+ MRR and they have zero social media presence.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold">What</h1>
                            <div className="flex flex-col gap-5">
                                <p className="text-sm">
                                Motive gives users daily motivational quotes from history&apos;s most successful athletes, entrepreneurs, and leaders. The emergency button gives users the harsh reality about the discipline, grit, and perseverance needed to reach one&apos;s goals.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold">How</h1>
                            <div className="flex flex-col gap-5">
                                <p className="text-sm">
                                The Bible Chat app has gotten over 20 million views on TikTok showcasing their Bible verse lock screen widget. I&apos;ll be posting content with the same hook/structure as well as content formats that are going viral in the motivation niche.
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