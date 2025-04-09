import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./common/InputField";
import Button from "./common/Button";

const schema = z.object({
  street: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().regex(/^\d{5,}$/, "Zip Code must be at least 5 digits"),
});

export default function Step2({ next, prev, data, updateFields }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      street: data.street,
      city: data.city,
      zip: data.zip,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (values) => {
    updateFields(values);
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        label="Street Address"
        name="street"
        register={register}
        error={errors.street}
      />
      <InputField
        label="City"
        name="city"
        register={register}
        error={errors.city}
      />
      <InputField
        label="Zip Code"
        name="zip"
        register={register}
        error={errors.zip}
      />

      <div className="flex justify-between pt-4">
        <Button
          onClick={prev}
          className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500"
        >
          Previous
        </Button>
        <Button
          type="submit"
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Next
        </Button>
      </div>
    </form>
  );
}
