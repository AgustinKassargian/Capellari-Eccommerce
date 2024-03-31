import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ name, price, img, align, slug }) {
    const alignmentClasses =
      align === "start"
        ? "md:justify-start lg:justify-start"
        : align === "center"
        ? "md:justify-center lg:justify-center"
        : "md:justify-end lg:justify-end";
    return (
        <Link
        href={`/product/${slug}`}
        className={`w-full flex justify-center sm:justify-center ${alignmentClasses} cursor-pointer hover:scale-105 transform transition duration-300 no-underline`}>
            <div className={`flex flex-col w-[60%] min-w-48 rounded-xl shadow-lg bg-slate-50 items-center`}>
                <Image
                    src={'/product.png'}
                    alt="image"
                    width={250}
                    height={250}
                />
                <div className="text-center h-[5vh] items-center flex  flex-col justify-evenly">
                    <label>{name}</label>
                    <label>${price}</label>
                </div>
            </div>
        </Link>
    );
  }