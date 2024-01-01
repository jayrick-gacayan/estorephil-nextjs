import AgentDetailsInfo from "../_components/agent-details-info";

export default function AgentDetails() {
  return (
    <div className="flex justify-evenly">
      <div className="bg-white w-[40rem] border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 ">
        <div className="space-y-4">
          <div>Agent Information</div>
          <AgentDetailsInfo
            label={"Agent Name:"}
            data={"Jezzel Villamore"}
          />
          <AgentDetailsInfo
            label={"Email:"}
            data={"illamorjezzel@gmail.com"}
          />
          <AgentDetailsInfo
            label={"Telephone Number:"}
            data={"09325119327"}
          />
          <AgentDetailsInfo
            label={"Role:"}
            data={"Agent Admin"}
          />
        </div>
      </div>
      <div className="bg-white w-[40rem] p-5 border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 ">
        <div className="space-y-4">
          <div>Company Details</div>
          <AgentDetailsInfo
            label={"Company Name:"}
            data={"Jezzel Villamore"}
          />
          <AgentDetailsInfo
            label={"Telephone Number:"}
            data={"09325119327"}
          />
          <AgentDetailsInfo
            label={"Mobile Number:"}
            data={"31515135135"}
          />
          <AgentDetailsInfo
            label={"Address:"}
            data={"Sample Street, Test Town, Central City, Sadge Province"}
          />
          <AgentDetailsInfo
            label={"Country:"}
            data={"Philippines"}
          />
          <AgentDetailsInfo
            label={"Business Nature:"}
            data={"Beauty"}
          />
          <AgentDetailsInfo
            label={"Referral Fee:"}
            data={"1.5"}
          />
        </div>
      </div>
    </div>
  );
}
