import React, { useState } from "react";

const SuccessModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent actual form submission
        setIsModalVisible(true); // Show modal
        // Restart animation
        const checkIcon = document.querySelector(".check-icon");
        checkIcon.style.display = "none";
        setTimeout(() => {
            checkIcon.style.display = "block";
        }, 10);
    };

    const handleClose = () => {
        setIsModalVisible(false); // Hide modal
    };

    return (
        <div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4">
                <h2 className="text-lg font-semibold mb-4">Book an Appointment</h2>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="block w-full mb-2 p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="block w-full mb-2 p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>

            {/* Modal */}
            {isModalVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
                        <div className="success-checkmark">
                            <div className="check-icon">
                                <span className="icon-line line-tip"></span>
                                <span className="icon-line line-long"></span>
                                <div className="icon-circle"></div>
                                <div className="icon-fix"></div>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold mt-4">
                            Appointment Booked Successfully
                        </h2>
                        <p className="text-gray-600 mt-2">
                            A confirmation email is also shared.
                        </p>
                        <button
                            onClick={handleClose}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SuccessModal;
