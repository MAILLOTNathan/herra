import User from "./User";

import { LatLngTuple } from "leaflet";

interface Post {
    user: User;
    comment: string;
    gpsPoint: LatLngTuple | null;
    time: string;
    likes: number;
}

export default Post;