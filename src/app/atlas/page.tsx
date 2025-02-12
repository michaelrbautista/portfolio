import BackButton from "@/components/BackButton"
import { Section } from "@/components/Section"
import { ArrowUpRight } from "lucide-react"
import { AtlasSections } from "../content/atlas"

const page = () => {
    return (
        <div className="w-full sm:max-w-md py-20">
            <div className="flex flex-col gap-10 px-5 sm:px-0">
                <BackButton />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">Atlas</p>
                        <p className="font-semibold text-base text-systemGray">Founder</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <a
                            className="flex flex-row items-center underline underline-offset-4 decoration-systemGray"
                            target="_blank"
                            href="https://www.useatlas.xyz/"
                            rel="noopener noreferrer"
                        >
                            Web
                            <ArrowUpRight size={18} />
                        </a>
                        <a
                            className="flex flex-row items-center underline underline-offset-4 decoration-systemGray"
                            target="_blank"
                            href="https://apps.apple.com/us/app/atlas-health-and-fitness/id6484401731"
                            rel="noopener noreferrer"
                        >
                            iOS
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                    <div className="flex flex-col gap-10">
                        {AtlasSections.map((section) => {
                            return (
                                <Section
                                    header={section.header}
                                    body={section.body}
                                    key={section.header}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page