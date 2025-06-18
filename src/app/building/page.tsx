import BackButton from "@/components/BackButton"
import { ArrowUpRight } from "lucide-react"

const page = () => {
    return (
        <div className="w-full sm:max-w-lg py-20">
            <div className="flex flex-col gap-10 px-5 sm:px-0">
                <BackButton />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col">
                        <p className="font-semibold text-base">Locked In</p>
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
                                The top motivational quote and motivational audio apps on the iOS App Store make $200K+ MRR. They have a weak product and social media presence.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold">What</h1>
                            <div className="flex flex-col gap-5">
                                <p className="text-sm">
                                Locked In gives users motivational audios and quotes from history&apos;s most successful athletes, entrepreneurs, and leaders.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold">How</h1>
                            <div className="flex flex-col gap-5">
                                <p className="text-sm">
                                I am executing a short form content strategy to get downloads. I&apos;m currently testing content formats on 3 different accounts and have gained over 200k views so far.
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