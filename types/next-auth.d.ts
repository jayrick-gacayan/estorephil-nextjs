import NextAuth from "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's name. */
            id: number,
            email: string
            first_name: string
            last_name: string
            phone_number?: string
            address?: string
            status?: string
            accessToken?: string
        };
    }
    interface JWT {
        id: number,
        email: string
        first_name: string
        last_name: string
        phone_number?: string
        address?: string
        status?: string
        accessToken?: string
    }
}
