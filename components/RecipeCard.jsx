import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <div className="rotate-z-[-1deg]">
      <div className="">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          alt={title}
          width="500"
          height="600"
          className="object-cover"
        />
      </div>
      <div className="bg-[#fff] m-[0px] relative -top-[40px] -left-[10px] shadow-[1px 3px 5px rgba(0, 0, 0, 0.1)]">
        <div className="p-[16px]">
          <h4 className="my-[4px] mx-[0px]">{title}</h4>
          <p className="m-[0px] text-[#777]">
            Takes approx {cookingTime} mins to make
          </p>
        </div>
        <div className="mt-[20px] flex justify-end">
          <Link
            href={"/recipes/" + slug}
            className="text-[#fff] bg-[#f01b29] py-[16px] px-[24px] decoration-solid"
          >
            Cook this
          </Link>
        </div>
      </div>
    </div>
  );
}
