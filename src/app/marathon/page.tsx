import BackButton from "@/components/BackButton"
import BlurImage from "@/components/BlurImage"

const page = () => {
    return (
        <div className="w-full sm:max-w-lg py-20">
            <div className="flex flex-col gap-10 px-5 sm:px-0">
                <BackButton />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <p className="font-semibold text-base">2023 San Francisco Marathon</p>
                        <p className="text-sm text-systemGray">26.2 miles with 1,300 ft. of elevation</p>
                    </div>
                    <div className="flex justify-center py-10">
                        <div className="relative flex items-center w-[300px] h-[400px] shrink-0">
                            <BlurImage
                                alt="marathon"
                                src="https://ltjnvfgpomlatmtqjxrk.supabase.co/storage/v1/object/public/landing_page//marathonPhoto.jpeg"
                                contentMode="contain"
                                sizes="300px"
                                className="rounded-md"
                                canSelect={false}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-sm font-semibold">Training</h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-sm">
                                My training lasted 8 months for the SF marathon. This is what a typical 
                                week of training looked like:
                            </p>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm">Monday - easy run + lift</p>
                                <p className="text-sm">Tuesday - easy run</p>
                                <p className="text-sm">Wednesday - speed work + lift</p>
                                <p className="text-sm">Thursday - easy run</p>
                                <p className="text-sm">Friday - easy run</p>
                                <p className="text-sm">Saturday - long run</p>
                                <p className="text-sm">Sunday - rest</p>
                            </div>
                            <p className="text-sm">
                                My training plan for the SF marathon was heavily inspired by Nick Bare’s 
                                sub 3 hour marathon training. In his sub 3 hour marathon YouTube series, 
                                he put his weekly mileage in the comment section, so I followed his 
                                weekly progression and weekly structure.
                            </p>
                            <p className="text-sm">
                                For speed work, I alternated between intervals and tempo workouts. One 
                                week I would do intervals, and the next week I would do a tempo run. 
                                This format was also taken from Nick Bare. I also lifted twice a week, 
                                focusing on Kneesovertoes style lifts to build strength through range 
                                of motion. The ATG split squat and RDL were some of my favorite lifts 
                                because they helped me maintain range of motion in my hip flexors and 
                                hamstrings.
                            </p>
                            <p className="text-sm">
                                My longest run was 23 miles. I wanted to get as close to 26.2 miles as 
                                I could on a beat down body so I knew what it could feel like on race 
                                day.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-sm font-semibold">Nutrition</h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-sm">
                                This is what my day to day nutrition looked like for most of my training. 
                                I’ve used MyNetDiary for over 4 years to track what I eat.
                            </p>
                            <div className="flex w-full justify-center">
                                <div className="relative flex items-center w-[400px] h-[500px] shrink-0">
                                    <BlurImage
                                        alt="marathon"
                                        src="https://ltjnvfgpomlatmtqjxrk.supabase.co/storage/v1/object/public/landing_page//dayToDayNutrition.jpg"
                                        contentMode="contain"
                                        sizes="400px"
                                        className="rounded-md"
                                        canSelect={false}
                                    />
                                </div>
                            </div>
                            <div className="flex w-full justify-center py-10">
                                <div className="relative flex items-center w-[400px] h-[500px] shrink-0">
                                    <BlurImage
                                        alt="marathon"
                                        src="https://ltjnvfgpomlatmtqjxrk.supabase.co/storage/v1/object/public/landing_page//marathonNutrients.jpg"
                                        contentMode="contain"
                                        sizes="400px"
                                        className="rounded-md"
                                        canSelect={false}
                                    />
                                </div>
                            </div>
                            <p className="text-sm">
                                I’d do most of my morning runs fasted. There were a couple longer speed 
                                sessions during the peak of training where I had a gel before the run. 
                                For long runs and race day, I would eat 2 scoops of Skratch hydration 
                                mix and 1 Spring energy gel. This came out to around 60 grams of carbs 
                                an hour. Using this nutrition plan, I avoided hitting the wall during 
                                the race and during my long training runs.
                            </p>
                            <p className="text-sm">
                                At one point during my training, I decided to add kale to my dinner and 
                                quinoa to my rice. It was at this time that I started to experience 
                                problems with my digestion. It seemed like my stomach disagreed with 
                                every meal that I ate. My training stagnated and it felt like I was 
                                getting slower. The mileage that I had been maintaining for 6 months 
                                now started to take a tole on my body. Colitis runs in my family and 
                                affects two of my immediate family members, so I just assumed I had it 
                                too.
                            </p>
                            <p className="text-sm">
                                Around this time, I had started to look into the carnivore diet. The 
                                elimination aspect of the carnivore diet made a lot of sense to me, so 
                                I decided to eliminate foods that I believed were causing my digestive 
                                problems. On July 6th, a little over 2 weeks before the race, I decided 
                                to remove spinach, chia seeds, kale, and quinoa from my diet.
                            </p>
                            <p className="text-sm">
                                After a couple days without these foods, my HRV drastically increased, 
                                I had the most vivid dreams I could remember having, and my easy run 
                                pace decreased by almost 1 minutes and 30 seconds. After this experience, 
                                I became obsessed with sleep and digestion. I started experimenting with 
                                fasting, eating my last meal at least 2 hours before sleeping, and 
                                reducing my carbohydrate consumption by over 50%.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-sm font-semibold">Race</h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-sm">
                                For miles 1 to 13, I decided to be conservative with my level of effort. 
                                Being my first marathon, my heart rate was elevated for the first 5 or 
                                so miles because of nerves. I felt like I could go faster in the 
                                beginning, but I had never ran a race like this before so I decided to 
                                be cautious and conserve my effort.
                            </p>
                            <p className="text-sm">
                                At mile 13, we hit the climb. I had heard people talk about how brutal 
                                the climb was, but had never experienced it before. It was hard, but I 
                                spend most of my long runs running up and down hills throughout the 
                                city so it wasn’t as bad as I was expecting it to be.
                            </p>
                            <div className="flex w-full justify-center py-10">
                                <div className="relative flex items-center w-[400px] h-[500px] shrink-0">
                                    <BlurImage
                                        alt="marathon"
                                        src="https://ltjnvfgpomlatmtqjxrk.supabase.co/storage/v1/object/public/landing_page//finalPaces.jpg"
                                        contentMode="contain"
                                        sizes="400px"
                                        className="rounded-md"
                                        canSelect={false}
                                    />
                                </div>
                            </div>
                            <p className="text-sm">
                                After the big climb around mile 13, I started to think I could pick up 
                                the pace. At mile 19, I still felt like I could pick up the pace, so I 
                                decided to go for it. For miles 1 to 19, I had maintained a pace of 
                                around 8 min/mile. For miles 20 to 26, I maintained a pace of around 7 
                                min/mile. I clipped the last two miles at 6:29 and 6:27 and crossed the 
                                finish line in 3 hours and 23 minutes.
                            </p>
                            <div className="flex w-full justify-center py-10">
                                <div className="relative flex items-center w-[275px] h-[600px] shrink-0">
                                    <BlurImage
                                        alt="marathon"
                                        src="https://ltjnvfgpomlatmtqjxrk.supabase.co/storage/v1/object/public/landing_page//sfMarathon.JPG"
                                        contentMode="contain"
                                        sizes="275px"
                                        className="rounded-md"
                                        canSelect={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page