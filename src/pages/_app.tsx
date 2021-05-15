import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import {Provider, createClient, dedupExchange, fetchExchange, Client} from 'urql'
import {cacheExchange} from '@urql/exchange-graphcache'
import { defaultExchanges, subscriptionExchange } from 'urql';
import { SubscriptionClient } from 'subscriptions-transport-ws';


const __prod__ = process.env.NODE_ENV === "production"

const subscriptionClient = process.browser ? new SubscriptionClient(
  // "ws://localhost:4000/subscriptions",  
  "ws://tatubola-rpg.xyz:4000/subscriptions",
  // __prod__ ? process.env.HOST_PROD : process.env.HOST_DEV,
  {
    reconnect: true,
    timeout: 30000,
  },
  // ws
) : null;

console.log(__prod__)

import theme from '../theme'

const client = new Client({
  // url: "http://localhost:4000/graphql",
  url: "http://tatubola-rpg.xyz:4000/graphql",
  // url: __prod__ ? process.env.HOST_PROD : process.env.HOST_DEV,
  fetchOptions : {
    credentials: "include",
  },
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation)
    })
  ]

})

console.log('Client Url: ', client.url)
console.log('Subscription Url: ', __prod__ ? process.env.WS_HOST_PROD : process.env.WS_HOST_DEV)

function MyApp({ Component, pageProps }) {
  
  return (
    <Provider value={client}>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
    </Provider>
  )
}


export default MyApp
