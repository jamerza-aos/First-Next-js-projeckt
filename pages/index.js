import Layout from '../Components/Layout'
//import Link from 'next/link'
import Navigation from '../Components/Navgation'



const Home =() => {
  return (
    <Layout>

      <main>
      <section className="AboutUs">
            <div>
              <ul>
                <li className="AB">ABOUT US</li>
                <li className="AboutUsText">The occupational traffic permit is one of the most important things in the company when carrying out freight transport. In fact, it is a prerequisite for doing business traffic at all.</li>
                <li className="HowDo">How do you do when you need to obtain a commercial traffic permit for freight transport to your business?</li>
              </ul>
            </div>


            <div className="GROUP11">
             {/*  <img src="./public/Group\ 11.png" alt=""/> */}
            </div>
      </section>

      <section className="HowToApple">
        <div id="HowToAppleImg"> 
          {/*  <img src="./public/Group\ 11.png" alt=""/> */}
        </div>

        <div id="Howdiv">
          <ul>
            <li id="How">HOW TO APPLE</li>
            <li id="When">When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.</li>
          </ul>
        </div>

      </section>
      </main>
    </Layout>
  )
}

export default Home;
