import {NextResponse} from "next/server";

export async function GET(request: Request) {

    return NextResponse.json(
        {
            name: "Based Bits OG",
            description: "This badge is awarded for checking into the home base during the first week! You are a true Based Bits OG!",
            image: "https://ipfs.raribleuserdata.com/ipfs/QmRqqnZsbMLJGWt8SWjP2ebtzeHtWv5kkz3brbLzY1ShHt/5709.png",
            tokenId: "1",
            attributes: [
                {
                    trait_type: "artist",
                    value: "numo.eth"
                },
            ]
        });
};