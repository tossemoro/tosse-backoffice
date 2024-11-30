import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-white py-4 text-center bg-gray-800 mt-4">
      © copyright @ 2024{" "}
      <Link href="/" className="border-b-2 hover:text-orange-500">
        Tossé
      </Link>{" "}
      | All rights reserved.
    </footer>
  );
}
