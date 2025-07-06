import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

async function getRecipe(slug) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": slug,
  });

  return items[0] || null;
}

export async function generateStaticParams() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });
  return res.items.map((item) => ({ slug: item.fields.slug }));
}

export const revalidate = 1; // ISR: Revalidate every 1 second

export default async function RecipeDetails({ params }) {
  const recipe = await getRecipe(params.slug);

  // Handle redirect if recipe not found
  if (!recipe) {
    redirect("/");
  }

  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.fields;

  return (
    <div>
      <div className="banner">
        <Image
          src={"https:" + featuredImage.fields.file.url}
          alt={title}
          width={1200}
          height={600}
          className="object-cover"
          priority
        />
        <h2 className="uppercase m-[0px] bg-[#fff] inline-block p-[20px] relative -top-[60px] -left-[10px] rotate-z-[-1deg] shadow-[1px 3px 5px rgba(0, 0, 0, 0.1)]">
          {title}
        </h2>
      </div>

      <div className="info">
        <p className="m-[0px]">Takes about {cookingTime} mins to cook.</p>
        <h3 className="uppercase">Ingredients:</h3>

        {ingredients.map((ing) => (
          <span key={ing}>{ing}</span>
        ))}
      </div>

      <div className="method">
        <h3 className="uppercase">Method:</h3>
        <div>{documentToReactComponents(method)}</div>
      </div>

      {/* <style jsx>{`
        
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style> */}
    </div>
  );
}
