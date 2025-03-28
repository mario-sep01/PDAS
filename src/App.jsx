import ProfileCard from "./ProfileCard"

function App() {
  

  return (
    <>
      <section className="hero is-dark">
        <div className="hero-body">
          <p className="title">Personal Digital Assistans</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="colum is-4">
              <ProfileCard
                title="Alexa"
                handle="@Alexa24"
                image="data:image/png;base64,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" 
              />
            </div>
            <div className="colum is-4">
              <ProfileCard />
            </div>
            <div className="colum is-4">
              <ProfileCard />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
