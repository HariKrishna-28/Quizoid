import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div className="container mx-auto pb-20 w-3/6 ">
                <div className="p-5 space-y-5 shadow-xl ">
                    <h1 className="text-center pb-5">Have something to say? Contact Us</h1>

                    <form>
                        <div className="grid grid-cols-2 lg:gap-5 gap-8">
                            <input
                                type="text"
                                className="border border-gray-500 col-span-2 lg:col-span-1 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                                placeholder="First Name"
                            />

                            <input
                                type="text"
                                placeholder="Last Name"
                            />

                            <input
                                type="email"
                                className="border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500 col-span-2"
                                placeholder="Email"
                            />

                            <textarea
                                cols="10"
                                rows="5"
                                className="border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500 col-span-2"
                                placeholder="Write your message..."
                            ></textarea>

                        </div>

                        <input
                            type="submit"
                            value="Send Message"
                            className="focus:outline-none mt-5 bg-black px-4 rounded py-2 text-white font-bold"
                        />

                    </form>
                </div>
            </div>

        </>
    )
}

export default ContactForm
