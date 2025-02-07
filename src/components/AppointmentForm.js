'use client';

import { useState } from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

// Generate time slots from 10 AM to 6 PM
const timeSlots = Array.from({ length: 9 }, (_, i) => {
    const hour = i + 10;
    return `${hour}:00 ${hour < 12 ? 'AM' : 'PM'}`;
});

const services = [
    'Anti Wrinkle',
    'Mesotherapy',
    'Fat Dissolving',
    'Microneedling',
    'Vitamin B12 injection',
    'Hopi Ear Candle',
    'Iv drip',
    'Bio filler',
    'PRP Hair Loss',
    'PRP Facial',
    'PDO threads',
    'Skin Booster',
    'Dermaplaning'
];

export default function MultiStepBooking() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        service: '',
        date: new Date(), // Initialize with today's date
        time: '',
    });
    const [errors, setErrors] = useState({});

    // Disable past dates
    const disabledDays = [
        { before: new Date() }
    ];

    const formatDate = (date) => {
        if (!date) return null;
        return date.toISOString().split('T')[0];
    };

    const validatePersonalInfo = () => {
        const newErrors = {};
        if (formData.firstName.length < 2)
            newErrors.firstName = 'First name must be at least 2 characters';
        if (formData.lastName.length < 2)
            newErrors.lastName = 'Last name must be at least 2 characters';
        if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Please enter a valid email address';
        if (formData.mobile.length < 10)
            newErrors.mobile = 'Please enter a valid mobile number';
        if (!formData.service)
            newErrors.service = 'Please select a service';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateAppointment = () => {
        const newErrors = {};
        if (!formData.date) newErrors.date = 'Please select a date';
        if (!formData.time) newErrors.time = 'Please select a time slot';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleServiceChange = (value) => {
        setFormData((prev) => ({ ...prev, service: value }));
    };

    const handleDateSelect = (date) => {
        setFormData(prev => ({ ...prev, date }));
    };

    const handleTimeChange = (time) => {
        setFormData((prev) => ({ ...prev, time }));
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        if (validatePersonalInfo()) {
            setStep(2);
        }
    };
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
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (validateAppointment()) {
    //         const formattedData = {
    //             ...formData,
    //             date: formatDate(formData.date),
    //         };
    //         try {
    //             const response = await fetch('/api/appointments', {
    //                 method: 'POST',
    //                 headers: { 'Content-Type': 'application/json' },
    //                 body: JSON.stringify(formattedData),
    //             });
    //             // if (response.ok) {
    //             //     alert('Appointment booked successfully!');
    //             // } else {
    //             //     alert('Failed to book the appointment. Please try again.');
    //             // }
    //         } catch (error) {
    //             console.error('Error:', error);
    //             alert('An error occurred. Please try again.');
    //         }
    //     }
    // };

    const css = `
    .rdp {
        --rdp-cell-size: 40px;
        --rdp-accent-color: #FB7185 !important;
        --rdp-background-color: #FECDD3 !important;
        margin: 0;
    }
    .rdp-day_selected:not(.rdp-day_outside) {
        background-color: var(--rdp-accent-color);
        color: white;
    }
    .rdp-day_selected:hover:not(.rdp-day_outside) {
        background-color: #F43F5E !important;
    }
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
        background-color: #FEE2E2 !important;
        border: 2px solid #FB7185 !important;
    }
    .rdp-nav_button:hover {
        background-color: #FEE2E2 !important;
    }
    .rdp-chevron svg {
        fill: #FB7185 !important;
    }
`;

    return (
        <section className="py-10">
            <style>{css}</style>
            <div className="mx-auto max-w-xl border border-rose-300 p-5 rounded-xl bg-white">
                {/* Step Indicator */}
                <div className="mb-8">
                    <div className="relative mx-auto mb-4 flex max-w-[240px] justify-between">
                        <div
                            className={`h-8 w-8 rounded-full ${step >= 1 ? 'bg-rose-400' : 'bg-rose-200'
                                } flex items-center justify-center text-white`}
                        >
                            1
                        </div>
                        <div
                            className={`absolute left-[50%] top-4 h-[2px] w-[80px] -translate-x-[50%] ${step >= 2 ? 'bg-rose-400' : 'bg-gray-200'
                                }`}
                        />
                        <div
                            className={`h-8 w-8 rounded-full ${step >= 2 ? 'bg-rose-400' : 'bg-rose-300'
                                } flex items-center justify-center text-white`}
                        >
                            2
                        </div>
                    </div>
                    <div className="text-center text-sm text-gray-600">Step {step} of 2</div>
                </div>

                {step === 1 ? (
                    <form onSubmit={handleNextStep} className="space-y-6">
                        {/* First step form fields remain the same */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <Input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter your first name" />
                            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <Input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter your last name" />
                            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                            <Input name="mobile" type="tel" value={formData.mobile} onChange={handleInputChange} placeholder="Enter your mobile number" />
                            {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Select Service</label>
                            <Select onValueChange={handleServiceChange} value={formData.service}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choose a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    {services.map((service) => (
                                        <SelectItem key={service} value={service}>{service}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                        </div>

                        <Button type="submit" className="w-full mt-4 bg-rose-400 px-8 py-6 text-base hover:bg-rose-500 hover:text-white">
                            Next Step
                        </Button>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex gap-6">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">Select Date</label>
                                <DayPicker
                                    mode="single"
                                    selected={formData.date}
                                    onSelect={handleDateSelect}
                                    disabled={disabledDays}
                                // footer={formData.date ?
                                //     `Selected: ${formData.date.toLocaleDateString()}` :
                                //     "Please pick a date"
                                // }
                                />
                                {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
                            </div>

                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700">Select Time</label>
                                <Select onValueChange={handleTimeChange} value={formData.time}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a time slot" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {timeSlots.map((time) => (
                                            <SelectItem key={time} value={time}>{time}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button type="button" variant="outline" className="py-6 w-full" onClick={() => setStep(1)}>
                                Back
                            </Button>
                            <Button type="submit" className="w-full bg-rose-400 px-8 py-6 text-base hover:bg-rose-500 hover:text-white">
                                Book Appointment
                            </Button>
                        </div>
                    </form>
                )}
            </div>
            {isModalVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
                        <div className="success-checkmark">
                            <div className="check-icon">
                                <div className="dummy-positioning d-flex">

                                    <div className="success-icon">
                                        <div className="success-icon__tip"></div>
                                        <div className="success-icon__long"></div>
                                    </div>

                                </div>
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
        </section>
    );
}