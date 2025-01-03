import ConnectButton from "@/components/ConnectButton";
import ItemList from "@/components/ItemList";
import Image from "next/image"
import { items } from "./items";


const Home = () => {
    return (
        <div className="w-[800px] py-20">
            <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-between gap-10 px-5 py-5 border-b-[1px]">
                    <div className="flex flex-col w-[250px] gap-5 shrink-0">
                        <div className="flex flex-row items-center gap-5">
                            <Image
                                className="h-[50px] w-[50px] rounded-full"
                                height={50}
                                width={50}
                                src="/MichaelBautistaHeadshot.jpg"
                                alt="headshot"
                                style={{objectFit: "cover"}}
                                priority
                            />
                            <div className="flex flex-col gap-0">
                                <p className="font-bold text-base">Michael Bautista</p>
                                <p className="text-systemGray">Product Manager</p>
                            </div>
                        </div>
                        <ConnectButton />
                    </div>
                    <div className="w-full">
                        <p>
                            Product manager with an appreciation for simple designs. 
                            Previously, I was a product manager at Equinix. 
                            I’m currently building Atlas, a monetization platform for 
                            fitness content creators. <br/>
                            <br />
                            In my free time, I immerse myself into everything health and 
                            fitness. At the moment, I’m focused on ultra running and 
                            nutrition for vitality.
                        </p>
                    </div>
                </div>
                <div>
                    <ItemList items={items} />
                </div>
            </div>
        </div>
    )
}

export default Home