import { useMutation } from "@tanstack/react-query";
import Button from "./common/Button";

export default function Summary({ data, prev }) {
  const submitForm = async () => {
    await new Promise((res) => setTimeout(res, 1500));
    console.log("Submitted data:", data);
    return data;
  };

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: submitForm,
  });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Summary</h2>
      <ul className="text-sm space-y-1">
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>

      <div className="flex justify-between pt-4">
        <Button
          onClick={prev}
          className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500"
        >
          Previous
        </Button>
        <Button
          onClick={() => mutate()}
          className="bg-blue-600 text-white hover:bg-blue-700"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </div>

      {isSuccess && (
        <p className="text-green-500">Form submitted successfully!</p>
      )}
    </div>
  );
}
