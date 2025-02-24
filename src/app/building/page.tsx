import BackButton from "@/components/BackButton"

const page = () => {
    return (
        <div className="w-full sm:max-w-lg py-20">
            <div className="flex flex-col gap-10 px-5 sm:px-0">
                <BackButton />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col">
                        <p className="font-semibold text-base">Hybrid AI</p>
                        <p className="text-sm text-systemGray">Personalized hybrid training programs</p>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold">Why</h1>
                            <div className="flex flex-col gap-5">
                                <p className="text-sm">
                                    As a Division 1 soccer player, marathon runner, and ultramarathon runner, I’ve always enjoyed combining 
                                    endurance training and strength training. In each pursuit, I’ve found it difficult to find training 
                                    programs that balance the two. I’m planning on running a 50 mile ultramarathon soon, and haven’t been 
                                    able to find a training program that incorporates running and lifting.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold">What</h1>
                            <div className="flex flex-col gap-5">
                                <p className="text-sm">
                                    Hybrid AI is an iOS app that creates personalized hybrid training programs for general strength and 
                                    endurance training or race preparation. Based on criteria like experience, current level of fitness, 
                                    and training foals, users get a personalized training program that includes running and lifting.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold">Why</h1>
                            <div className="flex flex-col gap-5">
                                <p className="text-sm">
                                    Hybrid AI prompts the ChatGPT APIs with guidelines based on research and my personal knowledge of 
                                    hybrid training. I’ve tried to ensure that the model doesn’t create a random program, but creates a 
                                    training program based on the restrictions I give it. Essentially, I’m using ChatGPT to simply translate 
                                    the program into JSON that can be saved to the database and viewed on the mobile app.
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