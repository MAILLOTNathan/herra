interface User {
    name: string;
    email: string;
    id: number;
    age: number;
    friends: User[];
    avatar: string;
}

export default User;