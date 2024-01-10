import Image from "next/image";
import CourierDetailsCard from "../_components/courier-details-card";
import CourierDetailsInfo from "../_components/courier-details-info";
import AgentDetailsInfo from "../_components/courier-details-info";

export default function CourierDetails() {
  //  label={"Agent Name:"} data={"Jezzel Villamore"}

  return (
    <div className="flex flex-wrap justify-start items-start gap-8">
      <div className="h-[20rem]">
        <CourierDetailsCard
          title={"Company Details"}
          data={[
            {
              label: "Company Logo:",
              value: (
                <Image
                  src={"/static_images/txc.jpeg"}
                  alt={"company logo"}
                  width={100}
                  height={50}
                />
              ),
            },
            { label: "Company Name:", value: "Koda Courier" },
            { label: "Owner Name:", value: "(555) 123-4567letters?" },
            { label: "Telephone Name:", value: "09694098497letters?" },
            {
              label: "Mobile Name:",
              value: "456 Mango Avenue, Brgy. Lahug, Cebu, Cebu",
            },
            { label: "Country:", value: "Philippines" },
          ]}
        />
      </div>
      <div className="h-[20rem]">
        <CourierDetailsCard
          title={"Staff Details"}
          data={[
            {
              label: "Company Logo:",
              value: (
                <div className="overflow-hidden rounded-full h-[100px] w-[100px] bg-red-500']">
                  <Image
                    src={"/static_images/profile_image_default.jpg"}
                    alt={"company logo"}
                    width={100}
                    height={50}
                  />
                </div>
              ),
            },
            { label: "Name:", value: "Koda Courier" },
            { label: "Email:", value: "(555) 123-4567letters?" },
            { label: "Phone Number:", value: "09694098497letters?" },
            {
              label: "Complete Address:",
              value: "456 Mango Avenue, Brgy. Lahug, Cebu, Cebu",
            },
          ]}
        />
      </div>

      <CourierDetailsCard
        title={"Company Staff"}
        data={[
          {
            label: "Photo ID:",
            value: (
              <Image
                src={"/static_images/txc.jpeg"}
                alt={"company logo"}
                width={100}
                height={50}
              />
            ),
          },
          { label: "Photo ID:", value: "Koda Courier" },
          { label: "First Name:", value: "(555) 123-4567letters?" },
          { label: "Last Name:", value: "09694098497letters?" },
          {
            label: "Role:",
            value: "456 Mango Avenue, Brgy. Lahug, Cebu, Cebu",
          },
          { label: "Department:", value: "Philippines" },
          { label: "Landline:", value: "Philippines" },
          { label: "Mobile:", value: "Philippines" },
          { label: "Email:", value: "Philippines" },
          { label: "Street:", value: "Philippines" },
          { label: "Town:", value: "Philippines" },
          { label: "City:", value: "Philippines" },
          { label: "Province:", value: "Philippines" },
        ]}
      />
    </div>
  );
}
