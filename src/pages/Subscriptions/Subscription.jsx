import React from "react";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import AppointmentForm from "../Appointment/AppointmentForm";
import Button from "../../components/Button/Button";

const Subscription = () => {
  const navigate = useNavigate();
  // Example data for the cards

  const subscriptionOptions = [
    {
      title: "One-Time Diet Plan",
      description: "Get a personalized diet plan tailored to your goals.",
      listItems: [
        "Customized meal plan",
        "Grocery shopping list",
        "Nutrition education",
        "30-day plan",
      ],
      buttonText: "Get Plan",
    },
    {
      title: "Single Consultation",
      description: "Meet with a dietitian and get a personalized diet plan.",
      listItems: [
        "1-on-1 consultation",
        "Personalized diet plan",
        "Ongoing support",
        "30-day plan",
      ],
      buttonText: "Book Consultation",
    },
    {
      title: "Multiple Consultation",
      description: "Get continuous support and diet plan adjustments.",
      listItems: [
        "3 consultations",
        "Personalized diet plan",
        "Progress tracking",
        "Unlimited email support",
      ],
      buttonText: "Book Consultations",
    },
  ];
  // const handleButtonClick = (link) => {
  //   navigate(link);
  // };
  return (
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Subscription Options
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that best fits your needs and budget.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {subscriptionOptions.map((option, index) => (
            <Card
              key={index}
              title={option.title}
              description={option.description}
              listItems={option.listItems}
              buttonText={option.buttonText}
              onClick={() => navigate("/appointment")}
              showImage={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
