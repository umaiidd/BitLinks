import { redirect } from "next/navigation";
import { Url } from "../../db/schema";

export default async function Page({ params }) {
    const { shortendurl } = await params;
    console.log(shortendurl);
    if (!shortendurl) {
        return redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    }
    let doc;
    try {
        doc = await Url.findOne({ shortendUrl: `${process.env.NEXT_PUBLIC_HOST}${shortendurl}` });
    } catch (error) {
        console.error("Error fetching URL:", error);
    }
    if (doc && doc.url) {
        return redirect(doc.url);
    }
    return redirect(`${process.env.NEXT_PUBLIC_HOST}`);
}
