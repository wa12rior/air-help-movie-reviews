import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams: URLSearchParams = request.nextUrl.searchParams;

  // TODO: add env.mjs to validate env variables
  const domain = process.env.NYTIMES_API_URL;

  const reviewUrl = `${domain}/articlesearch.json`;
  const query = searchParams.get("query");
  const page = searchParams.get("page") ?? "0";

  if (!query) {
    return Response.json({ data: [] });
  }

  const apiSearchParams = {
    "api-key": process.env.NYTIMES_API_KEY as string,
    fq: 'section_name:"Movies" AND type_of_material:"Review"',
    q: query,
    page,
  };

  const apiQuery = new URLSearchParams(apiSearchParams);
  const url = `${reviewUrl}?${apiQuery}`;

  let data;

  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    data = await res.json();
    data.error = null;
  } catch (err) {
    console.error({
      error: (err as TypeError).message,
    });

    data = { error: (err as TypeError).message };
  }

  return Response.json({ data });
}
