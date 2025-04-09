"use client";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Summary from "@/components/Summary";
import { useState } from "react";

const steps = ["Personal Info", "Address", "Account Setup", "Summary"];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    username: "",
    password: "",
  });

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  const updateFields = (fields) =>
    setFormData((prev) => ({ ...prev, ...fields }));

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg text-black dark:text-white shadow">
      <div className="flex justify-between mb-6">
        {steps.map((label, index) => (
          <div
            key={index}
            className={`flex-1 text-center py-2 border-b-4 ${
              index === step
                ? "border-blue-600 font-semibold"
                : "border-gray-300 text-gray-500"
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      {step === 0 && (
        <Step1 next={next} data={formData} updateFields={updateFields} />
      )}
      {step === 1 && (
        <Step2
          next={next}
          prev={prev}
          data={formData}
          updateFields={updateFields}
        />
      )}
      {step === 2 && (
        <Step3
          next={next}
          prev={prev}
          data={formData}
          updateFields={updateFields}
        />
      )}
      {step === 3 && <Summary data={formData} prev={prev} />}
    </div>
  );
}
