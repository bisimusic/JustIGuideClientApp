import Link from "next/link";
import Image from "@/components/Image";

type TestProps = {
    className?: string;
    dark?: boolean;
};

const Test = ({ className, dark }: TestProps) => (
    <Link className={`flex w-[180.0rem] ${className}`} href="/"> {/* Adjusted container width */}
        <Image
            className="w-90.5 h-90.5"  // Adjusted width and height here
            src={dark ? "/images/logo-dark.svg" : "/images/logo.svg"}
            width={250}  // Adjusted width here
            height={250}  // Adjusted height here
            alt="JustiGuide"
        />
    </Link>
);

export default Test;
