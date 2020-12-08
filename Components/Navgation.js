import Link from 'next/link'

const Navigation = () => {
    return (

     <section className="header">
        <div className="HeaderNAv">
                 <h1>TRAVIKO</h1>
                     <ul>
                        <li>
                         <Link href="/about">
                               <a>ABOUT</a>
                         </Link>
                        </li>
                         <li>
                           <Link href="/howTo">
                               <a>HOW TO</a>
                         </Link>
                         </li>
                            <li>
                             <Link href="/faq">
                              <a>FAQS</a>
                             </Link>
                        </li>
                         <li>
                              <Link href="/contact">
                               <a className="contact" > CONTACT US</a>
                              </Link>
                         </li>
                    </ul>
       </div>

        <div className="your">
            <ul>
                <li className="headerText">Your awesome traffic permit consultant.</li>
                <li className="getStarted"><a href="#"> Get Startde</a></li>
            </ul>
        </div>

        {/* <img src=".../public/Group 35.png" alt=""/> */}
        </section>
    );
}

export default Navigation;