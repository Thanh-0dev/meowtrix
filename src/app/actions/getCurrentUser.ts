import { cache } from "react";

import prisma from "@/libs/prismadb";
import getSession from "./getSession";

const getCurrentUser = cache(async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string
      }
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
    };
  } catch (error: any) {
    return null;
  }
});

export default getCurrentUser;
