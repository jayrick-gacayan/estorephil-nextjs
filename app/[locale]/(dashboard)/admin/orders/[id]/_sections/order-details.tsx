import OrderDetailsInfo from "../_components/order-details-info";

export default function OrderDetails() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-evenly gap-5">
        <div className="bg-white grow border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 h-min">
          <div className="space-y-4">
            <div>Order Information</div>
            <OrderDetailsInfo label={"Status:"} data={"Cancelled"} />
            <OrderDetailsInfo label={"Payment Mode:"} data={"Cash"} />
            <OrderDetailsInfo label={"Total Price:"} data={"C$ 50.0"} />
            <OrderDetailsInfo label={"Cart Type:"} data={"Shopping Cart"} />
            <OrderDetailsInfo label={"Weight :"} data={"1.0"} />
          </div>
        </div>
        <div className="bg-white grow p-5 border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 h-min">
          <div className="space-y-4">
            <div>Agent Information</div>
            <OrderDetailsInfo
              label={"Agent Name: "}
              data={"Maggie Encarnacion"}
            />
            <OrderDetailsInfo label={"Phone Number:"} data={"06516515616"} />

            <OrderDetailsInfo label={"Agent Referral:"} data={"1.5"} />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly gap-5">
        <div className="bg-white grow border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 h-min">
          <div className="space-y-4">
            <div>Company Information</div>
            <OrderDetailsInfo label={"Company Name:"} data={"Koda Courier"} />
            <OrderDetailsInfo
              label={"Company Email:"}
              data={"oliver.visto@kodakollectiv.com"}
            />
            <OrderDetailsInfo label={"Country:"} data={"Philippines "} />
            <OrderDetailsInfo label={"Referral Fee :"} data={"1.5"} />
          </div>
        </div>
        <div className="bg-white grow border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 h-min">
          <div className="space-y-4">
            <div>Delivery Details</div>
            <OrderDetailsInfo label={"Delivery Notes:"} data={""} />
            <OrderDetailsInfo label={"Service Delivery Tax:"} data={"0.0"} />
            <OrderDetailsInfo
              label={"Sales Tax:"}
              data={"Philippines, Mandaue"}
            />
            <OrderDetailsInfo label={"Country & City:"} data={"1.5"} />
            <OrderDetailsInfo label={"PH Tax:"} data={"1.5"} />
            <OrderDetailsInfo label={"STRIPE Fee:"} data={"1.5"} />
            <OrderDetailsInfo label={"STRIPE Additional Cost:"} data={"1.5"} />
            <OrderDetailsInfo
              label={"STRIPE Reciept:"}
              data={"/admins/orders/9"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
