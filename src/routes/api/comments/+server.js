import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments";
import exp from "constants";

// export function GET() {
//     return new Response(JSON.stringify(comments), {
//         headers: {
//             "content-type": "application/json",
//         },
//     });
// }


// convenience function to return json, does the same as above
export function GET() {
    return json(comments);
}

export async function POST(requestEvent) {
    const { request } = requestEvent;
    const { text } = await request.json()
    const newComment = {
        id: comments.length + 1,
        text,
    };
    comments.push(newComment);
    return json(newComment, { status: 201 });
}