import { useState, useEffect } from "react";


export default function Home() {

    const [darkTheme, setDarkTheme] = useState(undefined)
    const handleToggle = (e) => {
        setDarkTheme(e.target.checked)
    }

    useEffect( () => {
        if(darkTheme !== undefined) {
            if(darkTheme) {
                document.documentElement.setAttribute("data-theme", "dark")
                window.localStorage.setItem("theme", "dark")
            }else {
                document.documentElement.removeAttribute("data-theme")
                window.localStorage.setItem("theme", "light")
            } 
        }
    }, [darkTheme])

  return (
    <div>
      <div className="container">
          <nav>
              <div className={"title"}>私のポートフォリオ</div>
              <div>
                  <form action={"#"}>
                      <label className={"switch"}>
                          <input type={"checkbox"} onChange={handleToggle} checked={darkTheme}/>
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
