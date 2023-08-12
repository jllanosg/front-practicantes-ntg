import './App.css'

const App: React.FC = () => {

  return (
    <div className="bg-white rounded-t-xl">
      <div className="p-4 m-4">
        <h1 className="text-3xl font-semibold">
          practicantes <span className="text-stone-500/90">
            ne<span className='text-orange-500'>w</span>t<span className='text-orange-500'>e</span>n<span className='text-orange-500'>b</span>erg
          </span>
        </h1>
      </div>
      <div className="px-4">
        <hr />
      </div>
      <div className="flex justify-evenly p-4 m-4">
        <div className="flex flex-col rounded-lg shadow-xl p-3 hover:shadow-inner">
          <h2 className="font-mono ">pywb</h2>
          <hr className="m-4"/>
          <a className='h-full' href="https://practicantes.newtenberg.com/pywb/">
            <div className='mt-8 '>
              <img src="https://raw.githubusercontent.com/webrecorder/pywb/main/pywb/static/pywb-logo.png" />
            </div>
          </a>
        </div>
        <div className="flex flex-col rounded-lg shadow-xl p-3 hover:shadow-inner">
          <div className="mb-4 ">
          <h2 className="font-mono">solrwayback</h2>
          <hr className="m-4"/>
          </div>
            <a className='h-full' href="https://practicantes.newtenberg.com/solrwayback/">
              <div className='mt-8 '>
                <h1 className='text-3xl font-semibold tracking-wider text-solrwb-logo-1/90 p-1'>
                    SOLR<span className='text-solrwb-logo-2'>WAYBACK</span>
                </h1>
              </div>
            </a>
        </div>
        <div className="flex flex-col rounded-lg shadow-xl p-3 hover:shadow-inner">
          <h2 className="font-mono">solr</h2>
          <hr className="m-4"/>
          <a href="https://practicantes.newtenberg.com/solr/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Apache_Solr_logo.svg/250px-Apache_Solr_logo.svg.png"></img>
          </a>
        </div>
        <div className="flex flex-col rounded-lg shadow-xl p-3 hover:shadow-inner">
          <h2 className="font-mono">maqueta</h2>
          <hr className="m-4"/>
          <a href="https://practicantes.newtenberg.com/maqueta/maqueta.html">
            <img className='border rounded-full' src="/cachorrochupeatao.jpeg" />
          </a>
        </div>
      </div>
      <div className="px-4">
        <hr />
      </div>

      <div className='p-4 m-4'>
        <div className="text-5xl font-extrabold m-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-stone-900 to-pink-500">
            Ardilla legacy
          </span>
        </div>
        <div className="flex justify-center ">
          <img className='rounded-xl' src="https://media.tenor.com/v-TX2-c3DScAAAAC/ardilla-bailando.gif" />
        </div>
      </div>

      <footer>
        <hr className='my-2 mx-8'/>
        <p className='p-4'>dereshos de autor <a className="text-blue-600 visited:text-purple-600 hover:text-blue-600" href='https://www.github.com/jllanosg' target="_blank">@jllanosg</a></p>
      </footer>
    </div>
  )
}

export default App
