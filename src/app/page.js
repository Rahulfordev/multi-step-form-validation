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
    <div className="max-w-xl mx-4 sm:mx-auto mt-20 p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-lg text-black dark:text-white shadow">
      <div className="mb-6">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-600 -translate-y-1/2"></div>

          <div
            className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-300"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          ></div>

          {steps.map((label, index) => (
            <div key={index} className="relative z-10">
              <button
                // onClick={() => setStep(index)}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= step
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-600 text-gray-500"
                }`}
              >
                {index + 1}
              </button>
            </div>
          ))}
        </div>
        <div className="hidden md:flex justify-between mt-3 font-semibold text-blue-600">
          {steps.map((label, index) => (
            <span
              key={index}
              className={`hidden md:block text-xs text-center ${
                index <= step ? "text-blue-600 font-medium" : "text-gray-500"
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="md:hidden text-center mt-3 font-semibold text-blue-600">
          {steps[step]}
        </div>
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
