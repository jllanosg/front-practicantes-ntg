import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        practicantes Newtenberg
      </h1>
      <div className="flex flex-row">
        <div className="basis-1/2">
          <a href="https://practicantes.newtenberg.com/pywb/"><button >pywb</button></a>
        </div>
        <div className="basis-1/2">
          <a href="https://practicantes.newtenberg.com/solrwayback/"><button >solrwayback</button></a>
        </div>
      </div>
      <div className="border">
        <img
          alt="ardillasour"
          className="rounded-full"
          src="https://media.tenor.com/v-TX2-c3DScAAAAC/ardilla-bailando.gif"
        />
      </div>
    </>
  )
}

export default App
