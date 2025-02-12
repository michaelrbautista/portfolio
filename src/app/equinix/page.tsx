import BackButton from "@/components/BackButton"
import { Section } from "@/components/Section"

const page = () => {
    return (
        <div className="w-full sm:max-w-md py-20">
            <div className="flex flex-col gap-10 px-5 sm:px-0">
                <BackButton />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">Equinix</p>
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
                        <div className="flex flex-col gap-2">
                            <h1 className="text-lg font-bold">Amplitude</h1>
                            <div className="flex flex-col gap-5">
                                <p className="">
                                    As the company’s Amplitude power user, I used analytics to identify gaps in our product’s user experience. Like previously mentioned, I helped identify and resolve gaps in the Quick Connect feature, increasing the conversion rate from 5% to 20% and reducing the time to convert by 19%.
                                </p>
                                <p className="">
                                    I also identified that less than 5% of our daily users interacted with the home page, which kickstarted an effort to redesign the home page. Using Amplitude even further, I identified the most common workflows that our daily users completed, and used those to guide the new home page.
                                </p>
                                <p className="">
                                    Additionally, for the pricing tool that I worked on as an intern, I used Amplitude to measure its success. Users get value from the pricing tool when they estimate a configured product and export the estimate to get budget approval. We were able to measure the conversion rate for configuring a product and adding it to the estimate. We weren’t tracking estimate export rates, but put that on the roadmap once we discovered it wasn’t being tracked.
                                </p>
                            </div>
                        </div>
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