import NextAuth, { type NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    pages: {
        error: '/',
    },
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        session: ({ session, token}) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                }
            }
        },
        // user is only present, first time logged in
        jwt: ({ token, user }) => {
            if(user){
                return {
                    ...token, 
                    id: user.id,
                }
            }
            return token
        }
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
        }),
        CredentialsProvider({
        name: "Credentials",
        credentials: {},
        async authorize(credentials: any) {
            if(credentials.name === `${process.env.AUTH_NAME}` && credentials.pin === `${process.env.AUTH_PIN}`){
                return {id: 'admin'}
                
            }
            throw new Error('Inputs were not valid')
        }
        })
    ]
}

const handler = NextAuth(authOptions)
export default handler