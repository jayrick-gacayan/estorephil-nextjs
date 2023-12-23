"use client";

import SellerDetails from "./seller-details";
import SellerDetailsInvited from "./seller-details-invited";

export default function SellerDetailsSelection({ status }: { status: string }) {
  return (
    <div>
      {status === "Invitation Sent" ? (
        <SellerDetailsInvited />
      ) : status === "Pending" ? (
        <SellerDetails />
      ) : (
        <SellerDetails />
      )}
    </div>
  );
}
