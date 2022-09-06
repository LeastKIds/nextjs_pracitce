
export default function Home() {
  return (
    <div>
      <div className="container">
          <nav>
              <div className={"title"}>私のポートフォリオ</div>
              <div>
                  <form action={"#"}>
                      <label className={"switch"}>
                          <input type={"checkbox"}/>
                          <span className={"slider"}></span>
                      </label>
                  </form>
              </div>
          </nav>
          <section>
              <div className={"content"}>
                  <h1>ShinCodeのポートフォリオ🚀</h1>
                  <h3>色々な話</h3>
                  <p>なになにないなに</p>
                  <button className={"primary-btn"}>お問合せ</button>
              </div>
          </section>
      </div>
    </div>
  )
}
