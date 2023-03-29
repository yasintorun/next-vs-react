import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([
        {
            id: 1,
            name: "Tavşan",
            image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/rabbit-2785074_960_720.jpg",
        },
        {
            id: 2,
            name: "Köpek",
            image: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
        },
        {
            id: 3,
            name: "Kedi",
            image: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
        }
    ])
}
