import Link from "next/link"

export type ItemType = {
    date: string,
    title: string,
    subtitle: string,
    location: string,
    navigateUrl?: string
}

const Item = ({
    item
}: {
    item: ItemType
}) => {
    if (item.navigateUrl) {
        return (
            <Link
                href={item.navigateUrl}
                className="flex flex-row w-full items-center justify-between gap-10 px-5 py-[10px] rounded-md hover:bg-systemGray-6 cursor-ponter">
                <div className="w-[250px] shrink-0">
                    <p className="text-systemGray">{item.date}</p>
                </div>
                <div className="w-full">
                    <p className="font-bold">{item.title}</p>
                    <p>{item.subtitle}</p>
                    <p className="text-systemGray">{item.location}</p>
                </div>
            </Link>
        )
    } else {
        return (
            <div className="flex flex-row w-full items-center justify-between gap-10 px-5 py-[10px]">
                <div className="w-[250px] shrink-0">
                    <p className="text-systemGray">{item.date}</p>
                </div>
                <div className="w-full">
                    <p className="font-bold">{item.title}</p>
                    <p>{item.subtitle}</p>
                    <p className="text-systemGray">{item.location}</p>
                </div>
            </div>
        )
    }
}
export default Item