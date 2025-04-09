import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./common/InputField";
import Button from "./common/Button";

const schema = z
  .object({
    username: z.string().min(4, "Username must be at least 4 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export default function Step3({ next, prev, data, updateFields }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: data.username,
      password: data.password,
      confirmPassword: data.password,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (values) => {
    const { confirmPassword, ...rest } = values;
    updateFields(rest);
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        label="Username"
        name="username"
        register={register}
        error={errors.username}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        register={register}
        error={errors.password}
      />
      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword}
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
