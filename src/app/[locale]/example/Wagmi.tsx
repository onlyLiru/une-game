"use client";

import React from "react";
import { useAccount, useEnsName } from "wagmi";

function Wagmi() {
  const { address } = useAccount();
  const { data, error, status } = useEnsName({ address });
  console.log("data:", data);
  if (status === "pending") return <div>Loading ENS name</div>;
  if (status === "error")
    return <div>Error fetching ENS name: {error.message}</div>;
  return (
    <div>
      ENS name: {data},<p>address:{address}</p>
    </div>
  );
}

export default Wagmi;
