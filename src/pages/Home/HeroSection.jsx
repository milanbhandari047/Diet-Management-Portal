import React from "react";
import Button from "../../components/Button/Button";

const HeroSection = () => {
  return (
    <>
      <div className=" flex bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                Personalized Diet Plans for a Healthier You
              </h1>
              <p className="text-gray-600 text-lg">
                At Healthy Eats, we offer medical weight loss solutions to
                patients across Australia via tele-health consultations. Our
                initial appointment is bulk billed by Medicare, so you can be
                sure you’re getting high quality care at an affordable price.
              </p>
              <div className="flex gap-4">
                <Button text={"Get Started"} />
                <Button variant="outline" text={"Learn More"} />
              </div>
            </div>
            <div>
              <img
                alt="Healthy Eating"
                className="rounded-lg"
                height="400"
                src="https://myweightlossclinic.com.au/wp-content/uploads/2022/07/Myweightloss-hero.png"
                style={{
                  aspectRatio: "500/400",
                  objectFit: "cover",
                }}
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
