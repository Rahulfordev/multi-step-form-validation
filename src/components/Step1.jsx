import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./common/InputField";
import Button from "./common/Button";

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
});

export default function Step1({ next, data, updateFields }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
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
        label="Full Name"
        name="fullName"
        register={register}
        error={errors.fullName}
      />
      <InputField
        label="Email"
        name="email"
        register={register}
        error={errors.email}
      />
      <InputField
        label="Phone"
        name="phone"
        register={register}
        error={errors.phone}
      />

      <Button
        type="submit"
        className="bg-blue-600 text-white hover:bg-blue-700"
      >
        Next
      </Button>
    </form>
  );
}
