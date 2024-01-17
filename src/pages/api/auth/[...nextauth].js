import NextAuth from 'next-auth'
import AzureADProvider from 'next-auth/providers/azure-ad'
export default NextAuth({
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_CLIENT_ID,
      clientSecret: '~mI8Q~maAC5fEbhs2.HAAXb.~H-LSPnWGv41ca3r',
      scope: 'offline_access User.Read',
      tenantId: '473f8084-fa97-4271-b8b5-d3f72621d2d1'
    })
  ]
})
