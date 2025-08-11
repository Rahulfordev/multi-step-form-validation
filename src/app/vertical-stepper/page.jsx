import VerticalStepper from '../../components/VerticalStepper'

const page = () => {
      const steps = [
    {
      label: "Select campaign settings",
      description: (
        <>
          For each ad campaign that you create, you can control how much you’re
          willing to spend, which networks and locations, and more.
        </>
      ),
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads targeting shared keywords.",
      optional: "Optional",
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads targeting shared keywords.",
      optional: "Optional",
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads targeting shared keywords.",
      optional: "Optional",
    },
  ];
     
    return(
            <div className="p-6 bg-white">
          <VerticalStepper
            steps={steps}
            initialStep={0}
            onFinish={() => console.log("Finished!")}
          />
        </div>
    )
}