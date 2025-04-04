import ItemList from "@/components/ItemList";
import { items } from "./items";
import Link from "next/link";

const Home = () => {
    return (
        <div className="w-full sm:max-w-lg py-20 px-5 sm:px-0">
            <div className="flex flex-col gap-5 pb-5 border-b-[1px]">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="font-bold text-base">
                        Michael Bautista
                    </h1>
                    <Link
                        className="text-systemGray text-sm underline"
                        href="/connect"
                    >
                        Connect
                    </Link>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-sm">
                        Currently building an iOS app to help people run and lift.
                    </p>
                    <p className="text-sm">
                        Obsessed with health and fitness. Division 1 soccer, SF marathon in 3:23, and 1st 
                        place finisher in 32 mile ultra with 8,691 feet of elevation. Also into 
                        videography and content creation.
                    </p>
                    <p className="text-sm">
                        Grew up in Arroyo Grande, California. Currently in San Francisco.
                    </p>
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-row gap-5">
                            <a
                                className="text-sm underline"
                                href="https://x.com/mrbautistadev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>
                        </div>
                        <div className="flex flex-row gap-5">
                            <a
                                className="text-sm underline"
                                href="https://www.instagram.com/michaelsrunning/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <ItemList items={items} />
        </div>
    )
}

export default Home