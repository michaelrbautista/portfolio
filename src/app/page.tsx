import ItemList from "@/components/ItemList";
import { items } from "./items";
import Link from "next/link";

const Home = () => {
    return (
        <div className="w-full sm:max-w-md py-20 px-10">
            <div className="flex flex-col gap-10 pb-5 border-b-[1px]">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="font-bold text-lg">
                        Michael Bautista
                    </h1>
                    <Link
                        className="text-systemGray underline"
                        href="/connect"
                    >
                        Connect
                    </Link>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="">
                        Currently building <a href="/atlas" className="underline">Atlas</a> to help 
                        online fitness coaches monetize their training, nutrition, and lifestyle 
                        content.
                    </p>
                    <p className="">
                        1st place finisher in 32 mile ultra with 8,691 feet of elevation. Will run a 
                        50 mile race at some point.
                    </p>
                    <div className="flex flex-row gap-5">
                        <a
                            className="underline"
                            href="https://www.useatlas.xyz/michael"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Atlas
                        </a>
                        <a
                            className="underline"
                            href="https://www.instagram.com/michaelsrunning/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
            <ItemList items={items} />
        </div>
    )
}

export default Home