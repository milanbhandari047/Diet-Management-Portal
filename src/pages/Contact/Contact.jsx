import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log("Form submitted", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-600 text-lg">We'd love to hear from you!</p>
        </div>
        <div className="max-w-md mx-auto mt-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
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
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
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
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <Button text={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
