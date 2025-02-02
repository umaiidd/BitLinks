import { Url } from "./schema";

const saveUrl = async ({url, shortendUrl}) =>{
    try{
        const newUrl = new Url({ url, shortendUrl });
        await newUrl.save();
        return newUrl;
    }catch(error){
        console.error({type: "SaveUrlError", error});
    }
}

const getAllUrl  = async ()=>{
    try{
        const urls = await Url.find();
        return urls;
    }catch(error){
        console.error({type: "getAllUrlError", error});
    }
}

const getUrl = async ({ shortendUrl })=>{
    try{
        const url = await Url.findOne({ shortendUrl });
        return url;
    }catch(error){
        console.error({type: "getUrlError", error});
    }
}

export { saveUrl, getUrl, getAllUrl };