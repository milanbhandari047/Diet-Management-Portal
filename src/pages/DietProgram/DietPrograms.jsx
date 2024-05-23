import React from "react";
import Card from "../../components/Card/Card";
import {
  faLeaf,
  faHeartbeat,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

const DietPrograms = () => {
  // Example data for the cards
  const dietPrograms = [
    {
      image: "https://static.toiimg.com/photo/71941372.cms",
      icon: faLeaf,
      title: "Weight Loss",
      description:
        "Achieve your weight loss goals with our personalized diet plans.",
      listItems: [
        "Calorie-controlled meals",
        "Nutrient-dense recipes",
        "Personalized exercise plan",
        "Regular progress tracking",
      ],
      link: "/weight-loss",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/shirtless-muscular-man-holding-fresh-apple-yellow-grey-background-vegetarian-diet-perfect-six-pack-abdominal-65479243.jpg",
      icon: faHeartbeat,
      title: "Healthy Body",
      description: "Maintain a balanced diet for overall health and wellness.",
      listItems: [
        "Nutrient-rich meals",
        "Balanced macro nutrients",
        "Customized portion sizes",
        "Lifestyle recommendations",
      ],
      link: "/healthy-body",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyaAibu4I867VW2KUigzOahDee3oB7JhhNtogPhQ3FRGs0n7XfH9oCUMMchSo1RoagYo&usqp=CAU",
      icon: faStethoscope,
      title: "Medical Conditions",
      description:
        "Manage your medical condition with our specialized diet plans.",
      listItems: [
        "Diabetes-friendly meals",
        "Low-uric acid diet",
        "Allergy-aware recipes",
        "Personalized nutrition guidance",
      ],
      link: "/medical-conditions",
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Explore Our Diet Programs
          </h2>
          <p className="text-gray-600 text-lg">
            Find the perfect diet plan to suit your needs and lifestyle.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {dietPrograms.map((program, index) => (
            <Card
              key={index}
              image={program.image}
              icon={program.icon}
              title={program.title}
              description={program.description}
              listItems={program.listItems}
              // buttonText={program.buttonText}
              buttonText="Learn More"
              showImage={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DietPrograms;
