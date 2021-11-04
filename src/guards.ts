class User {
    username: string;
    avatarUrl: string;

    constructor(
        username,
        avatarUrl,
    ) {
        this.username = username;
        this.avatarUrl = avatarUrl;
    }
}


const value: unknown = {
    username: '12323',
    avatarUrl: 'image.gif'
}

if (value instanceof User) {
    console.log(value.username);
}

function isUser(v: unknown): v is User {
    return typeof value === 'object' 
        && 'username' in value
        && 'avatarUrl' in value; 
}
