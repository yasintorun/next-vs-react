import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: AuthOptions = {
    secret: "secretkey",
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },

            async authorize(credentials, req) {
                return { id: "1", name: "J Smith", email: "jsmith@example.com" }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/login',
    }
}
export default NextAuth(authOptions)