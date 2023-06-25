//backend code
import dbConnect from "@/app/utils/dbConn";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
export async function POST(req,res) {
    try{
const body=await req.json();
await dbConnect();
await Contact.create(body)
return NextResponse.json({
    message:"Message sent succesfully"
},{
    status:200
})
    }catch(e){
        return NextResponse.json({
            message:"Server Error,please try again "
        },{
            status:500
        })     
    }
}