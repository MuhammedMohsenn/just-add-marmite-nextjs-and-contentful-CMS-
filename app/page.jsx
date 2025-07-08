import RecipeCard from "../components/RecipeCard";

async function getRecipes() {
  const { createClient } = await import("contentful");

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });
  return res.items;
}

export const revalidate = 1;

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] gap-x-[60px]">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
}
