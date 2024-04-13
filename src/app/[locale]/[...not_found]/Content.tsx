"use client";
import { usePathname, useRouter } from "@/utils/navigation";
import { Button, Link } from "@chakra-ui/react";

function Content() {
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName, router);
  return (
    <div>
      <h2>Not Found {pathName}</h2>
      <p>Could not find requested resource</p>
      <Button>
        <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
          Return Home
        </Link>
      </Button>
    </div>
  );
}

export default Content;
