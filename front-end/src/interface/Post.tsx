import User from "./User";

interface Post {
    user: User;
    comment: string;
    gpsPoint: number[] | null;
    time: string;
    likes: number;
}

export default Post;