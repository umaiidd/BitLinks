import { Url } from "../db/schema";

const generate_random_string = () => {
    let list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let letters = "";
    for (let i = 1; i <= 10; i++) {
        const random = Math.floor(Math.random() * list.length);
        letters = letters + list[random];
    }
    return letters;
};

const is_unique_url= async (letters) => {
    const url = await Url.findOne({ shortendUrl: `${process.env.NEXT_PUBLIC_HOST}${letters}` });
    return url ? false : true; 
};

const get_unique_letters = async () => {
    const letters = generate_random_string();
    const isUnique = await is_unique_url(letters);
    
    if (isUnique) {
        return letters;
    } else {
        return get_unique_letters(); 
    }
};

export { get_unique_letters };
