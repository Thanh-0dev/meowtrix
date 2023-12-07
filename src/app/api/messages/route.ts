import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

export async function POST(
    request: Request,
) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const {
            message,
            conversationId
        } = body;

        if (!currentUser?.id) {
            return NextResponse.json(null);
        }

        const newMessage = await prisma.message.create({
            data: {
                body: message,
                conversation: {
                    connect: { id: conversationId }
                },
                sender: {
                    connect: { id: currentUser.id }
                }
            }
        });

        return NextResponse.json(newMessage)
    } catch (error) {
        return NextResponse.json(null);
    }
}