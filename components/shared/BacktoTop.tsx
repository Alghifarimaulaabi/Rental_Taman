import Link from "next/link";
import { MoveUp } from "lucide-react";

const BacktoTop = () => {
  return (
    <Link
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:bg-green-700 z-50"
    >
      <MoveUp className="h-6 w-6" />
    </Link>
  );
};

export default BacktoTop;