import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import {Provider, createClient, dedupExchange, fetchExchange, Client} from 'urql'
import {cacheExchange} from '@urql/exchange-graphcache'
import { defaultExchanges, subscriptionExchange } from 'urql';
import { SubscriptionClient } from 'subscriptions-transport-ws';

// const subscriptionClient = new SubscriptionClient('ws://localhost:4000/subscriptions', { reconnect: true});

// const ws = new WebSocket('ws://localhost:3000/ws')

const __prod__ = process.env.NODE_ENV === "production"

const subscriptionClient = process.browser ? new SubscriptionClient(
  __prod__ ? process.env.WS_HOST_PROD : process.env.WS_HOST_DEV,
  {
    reconnect: true,
    timeout: 30000,
  },
  // ws
) : null;


import theme from '../theme'

const client = new Client({
  url: "http://localhost:4000/graphql",
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
