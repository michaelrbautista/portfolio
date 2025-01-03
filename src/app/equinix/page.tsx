import BackButton from "@/components/BackButton"
import { Section } from "@/components/Section"

const page = () => {
    return (
        <div className="w-[800px] py-20">
            <div className="flex flex-col gap-20 px-5">
                <BackButton />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">Equinix</p>
                        <p className="font-semibold text-base text-systemGray">Senior Associate Product Manager</p>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-lg font-bold">Quick Connect</h1>
                            <div className="flex flex-col gap-5">
                                <p className="">
                                    To achieve network resiliency, Equinix urges customers to create redundant connections to service providers. To create redundant connections, Equinix Fabric users had to complete the create connection workflow for individual connections twice. To make it more intuitive and efficient to create redundant connections, we created Quick Connect. Quick Connect allows users to create two connections at the same to a service provider.
                                </p>
                                <p className="">
                                    As the product manager and product owner for Quick Connect, I was involved in every step of the product’s lifecycle. As a product manager, I used Amplitude and Fullstory to identify gaps in the user experience that we could improve. Ultimately, the UX team and I were able to increase the conversion rate from 5% to over 20%.
                                </p>
                            </div>
                        </div>
                        <Section
                            header="Amplitude"
                            body=""
                            key="Amplitude"
                        />
                        <Section
                            header="APIs"
                            body="At Equinix, I acted as our team’s contact for API support. I assisted multiple teams in creating custom applications with the Fabric APIs. The process for creating these custom applications was similar for each customer. I would start with understanding the problem that they were trying to solve, then created a user journey for the solution. Once the user journey was created, I then mapped out which APIs would be used for each step. Once the APIs were added to the user journey, I either worked with our own UX team to create wireframes or handed the user journey to the customer’s UX team."
                            key="APIs"
                        />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-lg font-bold">Pricing Tool</h1>
                            <div className="flex flex-col gap-5">
                                <p className="">
                                    As an intern, I was the product manager for the Equinix Fabric pricing tool. Before the pricing tool, customers had to go through sales and product teams to get an estimate for budgeting. This process would normally take a couple weeks to complete. With the pricing tool, the time to create an estimate was reduced to a couple minutes.
                                </p>
                                <p className="">
                                    As the product manager, I led product discovery and delivery. I collaborated with sales, the Fabric pricing product manager, UX, and our API architect to plan out a pricing calculator using our existing pricing APIs. Once the wireframes were created, I transitioned into a frontend software engineering intern and created the MVP using React and the Fabric APIs.
                                </p>
                                <p className="">
                                    After my internship, the product was tested internally then released to customers. This product had some of the highest usage and conversion rates out of all the features I worked on during my time at Equinix.
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