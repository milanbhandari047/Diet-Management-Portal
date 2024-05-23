// src/components/BookingForm.js
import React, { useState } from "react";
import Button from "./Button/Button";

const Label = ({ htmlFor, children }) => {
  return (
    <label className="block text-gray-700 font-bold mb-2" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

const Input = ({ id, name, placeholder, type = "text", value, onChange }) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const Textarea = ({ id, name, placeholder, value, onChange }) => {
  return (
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const BookingForm = () => {
  const [bookingType, setBookingType] = useState("individual");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    patientName: "",
    organizationName: "",
    employeeList: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Book Your Appointment
          </h2>
          <p className="text-gray-600 text-lg">
            Select a booking type and fill in the details.
          </p>
        </div>
        <div className="max-w-md mx-auto mt-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="bookingType">Booking Type</Label>
              <select
                id="bookingType"
                name="bookingType"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={bookingType}
                onChange={(e) => setBookingType(e.target.value)}
              >
                <option value="individual">Individual</option>
                <option value="doctor">Doctor</option>
                <option value="organization">Organization</option>
              </select>
            </div>

            {bookingType === "individual" && (
              <>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {bookingType === "doctor" && (
              <>
                <div>
                  <Label htmlFor="patientName">Patient Name</Label>
                  <Input
                    id="patientName"
                    name="patientName"
                    placeholder="Enter patient's name"
                    value={formData.patientName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {bookingType === "organization" && (
              <>
                <div>
                  <Label htmlFor="organizationName">Organization Name</Label>
                  <Input
                    id="organizationName"
                    name="organizationName"
                    placeholder="Enter organization's name"
                    value={formData.organizationName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="employeeList">Employee List</Label>
                  <Textarea
                    id="employeeList"
                    name="employeeList"
                    placeholder="Enter employee names separated by commas"
                    value={formData.employeeList}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            <Button text={"Book Appointment"} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
