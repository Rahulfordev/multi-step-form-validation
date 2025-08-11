"use client";
import React, { useState, useRef, useEffect } from "react";

// Collapse animation wrapper
function AnimatedCollapse({ show, children, duration = 300 }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(show ? "auto" : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (show) {
      const h = el.scrollHeight;
      setHeight(h);
      const id = setTimeout(() => setHeight("auto"), duration);
      return () => clearTimeout(id);
    } else {
      const h = el.scrollHeight;
      setHeight(h);
      requestAnimationFrame(() => setHeight(0));
    }
  }, [show, duration]);

  return (
    <div
      style={{
        height,
        overflow: "hidden",
        transition: `height ${duration}ms ease, opacity ${duration}ms ease, transform ${duration}ms ease`,
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(-4px)",
      }}
      ref={ref}
      aria-hidden={!show}
    >
      {children}
    </div>
  );
}

export default function VerticalStepper({ steps = [] }) {
  const [activeStep, setActiveStep] = useState(0);

  const goNext = () => setActiveStep((s) => s + 1);
  const goBack = () => setActiveStep((s) => s - 1);
  const reset = () => setActiveStep(0);

  if (!steps.length) return null;

  return (
    <div className="max-w-md">
      {activeStep < steps.length ? (
        <div className="relative">
          {steps.map((step, i) => {
            const isActive = i === activeStep;
            const isCompleted = i < activeStep;
            const isLast = i === steps.length - 1;

            return (
              <div key={i} className="flex gap-4 relative">
                {/* Left column: icon + line */}
                <div className="flex flex-col items-center relative">
                  {/* Icon */}
                  <span
                    className={[
                      "inline-grid h-6 w-6 place-items-center rounded-full border z-10 transition-all duration-300 ease-out",
                      isCompleted
                        ? "bg-emerald-500 border-emerald-500"
                        : isActive
                        ? "bg-white border-blue-600 ring-4 ring-blue-100 scale-[1.05]"
                        : "bg-white border-gray-300 scale-100",
                    ].join(" ")}
                  >
                    {isCompleted ? (
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.457 9.5l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <span
                        className={[
                          "text-[10px] font-semibold transition-colors duration-300",
                          isActive ? "text-blue-700" : "text-gray-500",
                        ].join(" ")}
                      >
                        {i + 1}
                      </span>
                    )}
                  </span>

                  {/* Connector line with scale animation */}
                  {!isLast && (
                    <span
                      className={[
                        "absolute top-6 bottom-0 w-px bg-gray-300 origin-top transition-transform duration-300 ease-out",
                        i <= activeStep ? "scale-y-100" : "scale-y-100",
                      ].join(" ")}
                    />
                  )}
                </div>

                {/* Right column: content */}
                <div className="pb-6">
                  <div className="mb-1 flex items-center gap-2">
                    <h3
                      className={[
                        "text-sm font-semibold transition-colors duration-300",
                        isActive ? "text-gray-900" : "text-gray-700",
                      ].join(" ")}
                    >
                      {step.label}
                    </h3>
                    {i === steps.length - 1 && (
                      <span className="text-[11px] rounded bg-gray-100 px-2 py-0.5 text-gray-600">
                        Last step
                      </span>
                    )}
                  </div>

                  <AnimatedCollapse show={isActive} duration={300}>
                    <div className="text-sm text-gray-600">
                      <div className="leading-relaxed">{step.description}</div>
                      <div className="mt-3 flex gap-2">
                        <button
                          onClick={goNext}
                          className="rounded-md px-3 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                          {isLast ? "Finish" : "Continue"}
                        </button>
                        <button
                          onClick={goBack}
                          disabled={activeStep === 0}
                          className="rounded-md px-3 py-1.5 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </AnimatedCollapse>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-md border border-gray-200 p-4">
          <p className="text-sm text-gray-700">
            All steps completed — you’re finished
          </p>
          <button
            onClick={reset}
            className="mt-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
