import React from "react";

import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import {
  faBuilding,
  faStethoscope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const WhoCanUse = () => {
  const navigate = useNavigate();
  // Example data for the cards

  const userGroups = [
    {
      icon: faUser,
      title: "Individuals",
      description: "Book your own personalized diet plan and consultations.",
      listItems: [
        "Browse diet programs",
        "Schedule consultations",
        "Manage your diet plan",
        "Track progress",
      ],
      buttonText: "Get Started",
      link: "/individuals",
    },
    {
      icon: faStethoscope,
      title: "Doctors",
      description: "Prescribe diet plans and monitor your patients' progress.",
      listItems: [
        "Refer patients to our services",
        "Collaborate with dietitians",
        "Review patient diet plans",
        "Monitor patient progress",
      ],
      buttonText: "Register",
      link: "/doctors",
    },
    {
      icon: faBuilding,
      title: "Organizations",
      description: "Provide your employees with personalized diet plans.",
      listItems: [
        "Book diet plans in bulk",
        "Customize plans for employees",
        "Monitor employee progress",
        "Improve employee health",
      ],
      buttonText: "Register",
      link: "/organizations",
    },
  ];
  const handleButtonClick = (link) => {
    navigate(link);
  };

  return (
    <div className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Who Can Use Our Services?
          </h2>
          <p className="text-gray-600 text-lg">
            Our platform caters to individuals, doctors, and organizations.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {userGroups.map((group, index) => (
            <Card
              key={index}
              icon={group.icon}
              title={group.title}
              description={group.description}
              listItems={group.listItems}
              buttonText={group.buttonText}
              onClick={() => handleButtonClick(group.link)}
              showImage={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoCanUse;
