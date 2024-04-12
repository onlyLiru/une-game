"use client";
import { usePathname, useRouter, Link } from "@/utils/navigation";

function Content() {
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName, router);
  return (
    <div>
      <h2>Not Found {pathName}</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default Content;
