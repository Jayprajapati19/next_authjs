
import { connect } from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { token } = reqBody
        console.log(token);

        const user = await User.findOne({ verifyToken: token, verifyTokenExpire: { $gt: Date.now() } })

        if (!user) {
            return NextResponse.json({ error: "Invalid Token Details" }, { status: 400 })
        }

        console.log(user);






    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
















