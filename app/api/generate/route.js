
import clientPromise from "@/lib/mongodb"

export default function handler(req, res) {
    try {
      if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
      }
  
      // Example: Simulated processing
      const { input } = req.body;
      if (!input) {
        throw new Error("Missing required input");
      }
  
      res.status(200).json({ message: `Generated URL for ${input}` });
    } catch (error) {
      console.error("API Error:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  

export async function POST(request) {
    

    const body = await request.json() 
    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // Check if the short url exists
    const doc = await collection.findOne({shorturl: body.shorturl})
    if(doc){
        return Response.json({success: false, error: true,  message: 'URL already exists!' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

    return Response.json({success: true, error: false,  message: 'URL Generated Successfully' })
  }