import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import PokemonsContainer from "./components/PokemonsContainer";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <main className="flex flex-col flex-grow items-center">
        <div className="bg-indigo-700 h-14 flex justify-center items-center sticky top-0  shadow-md shadow-slate-400 z-50 w-full">
          <h1 className="text-2xl font-bold tracking-wider text-white ">
            Pokedex
          </h1>
        </div>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
