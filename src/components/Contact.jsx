import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:shruti.awate1550@gmail.com?subject=Portfolio Contact: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
        window.location.href = mailtoLink;

        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 py-16 px-6">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                        Contact Me
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 font-semibold">
                        Let's Connect and Explore
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6" >
                        <div>
                            <label htmlFor="name"
                                className="block text-sm text-gray-700 font-medium mb-1">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded p-3"
                            />
                        </div>

                        <div>
                            <label htmlFor="email"
                                className="block text-sm text-gray-700 font-medium mb-1">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded p-3"
                            />
                        </div>

                        <div>
                            <label htmlFor="text"
                                className="block text-sm text-gray-700 font-medium mb-1">
                                Message:
                            </label>
                            <input
                                type="text"
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded p-3"
                            />
                        </div>

                        <button type="submit" 
                        className="w-full px-6 py-3 bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-semibold ">
                            Submit

                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
}
