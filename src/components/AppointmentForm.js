'use client';

import { useState } from 'react';
import { Calendar } from "@nextui-org/calendar";
import { parseDate } from '@internationalized/date';
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

export default function MultiStepBooking() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        date: null,
        time: '',
    });
    const [errors, setErrors] = useState({});

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

    const handleDateChange = (date) => {
        setFormData((prev) => ({ ...prev, date }));
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateAppointment()) {
            try {
                const response = await fetch('/api/appointments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    alert('Appointment booked successfully!');
                } else {
                    alert('Failed to book the appointment. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        }
    };


    return (
        <section className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-xl">
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
                        <div>
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                First Name
                            </label>
                            <Input
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="Enter your first name"
                            />
                            {errors.firstName && (
                                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Last Name
                            </label>
                            <Input
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Enter your last name"
                            />
                            {errors.lastName && (
                                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="mobile"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Mobile Number
                            </label>
                            <Input
                                id="mobile"
                                name="mobile"
                                type="tel"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                placeholder="Enter your mobile number"
                            />
                            {errors.mobile && (
                                <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full mt-4 bg-rose-400 px-8 py-6 text-base hover:bg-rose-400 hover:text-black"
                        >
                            Next Step
                        </Button>
                    </form>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 flex flex-col justify-center"
                    >
                        <div className="flex justify-between border border-rose-200 p-5 rounded-lg">
                            <div className="flex justify-center text center flex-col">
                                <label className="block text-sm font-medium text-gray-700">
                                    Select Date
                                </label>
                                <div className="flex jusitfy-center">
                                    <Calendar
                                        aria-label="Appointment Date"
                                        selected={formData.date}
                                        onChange={handleDateChange}
                                        minValue={parseDate(new Date().toISOString().split('T')[0])}
                                    />
                                </div>
                                {errors.date && (
                                    <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="time"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Select Time
                                </label>
                                <Select onValueChange={handleTimeChange} value={formData.time}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a time slot" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {timeSlots.map((time) => (
                                            <SelectItem key={time} value={time}>
                                                {time}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.time && (
                                    <p className="mt-1 text-sm text-red-600">{errors.time}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex item-center gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full py-6 text-lg"
                                onClick={() => setStep(1)}
                            >
                                Back
                            </Button>
                            <Button
                                type="submit"
                                className="w-full bg-rose-400 px-8 py-6 text-base hover:bg-rose-400 hover:text-black"
                            >
                                Book Appointment
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
