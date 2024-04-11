"use client"

import { useTest } from "@/apiHooks/useTest";

function Page() {
  const { user, isError, isLoading } = useTest();
  console.log(user, isError, isLoading);

  return (
    <div>
      <div>
        NEXT_PUBLIC_API_URL:{process.env.NEXT_PUBLIC_API_URL}
        <h3>
          NEXT_PUBLIC_VERCEL_CHAINID:{process.env.NEXT_PUBLIC_VERCEL_CHAINID}
        </h3>
        <h3>NEXT_PUBLIC_VERCEL_ENV:{process.env.NEXT_PUBLIC_VERCEL_ENV}</h3>
      </div>
    </div>
  );
}

export default Page;
