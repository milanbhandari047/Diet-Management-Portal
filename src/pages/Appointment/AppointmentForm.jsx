// AppointmentForm.js
import React from "react";
import Label from "../../components/Label";
import Select from "../../components/Select";
import Input from "../../components/Input";
import Button from "../../components/Button/Button";

// This is the form for booking an appointment.
const AppointmentForm = () => {
  return (
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Book Your Appointment
          </h2>
          <p className="text-gray-600 text-lg">
            Select a consultation option and schedule your appointment.
          </p>
        </div>
        <div className="max-w-md mx-auto mt-8">
          <form className="space-y-4">
            <div>
              <Label htmlFor="consultation">Consultation Type</Label>
              <Select id="consultation">
                <option value="one-time">One-Time Diet Plan</option>
                <option value="single">Single Consultation</option>
                <option value="ongoing">Multiple Consultations</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div>
              <Label htmlFor="date">Appointment Date</Label>
              <Input id="date" type="date" />
            </div>
            <div>
              <Label htmlFor="time">Appointment Time</Label>
              <Input id="time" type="time" />
            </div>
            <Button text={"Book Appointment"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
