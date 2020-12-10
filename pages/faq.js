import Questions from '../pages/questions'
import Layout from '../Components/Layout';

const FAQ = () => {
    return (
        <Layout>
            <Questions />
           <main id="faqmain">
               <section id="AboutUsFaq">
                   <div id="Faq1div"> 
                       <ul>
                           <li className="AB">ABOUT US</li>
                           <li className="zeichnen">--d--</li>
                       </ul>
                   </div>
                   

                   <div id="yes">
                   <article>
                       <div id="our">
                           Out Awsome Clents
                       </div>

                        
                       <div id="faqdivs1">
                             <ul>
                               <li className="faqtext"> Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.</li>
                               <li className="isak">Isak Pettersson</li>
                             </ul>
                       </div>
                       <div id="faqdivs2">
                             <ul>
                               <li className="faqtext">From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan.</li>
                               <li className="simon">Simon Sandberg</li>
                           </ul>
                       </div>
                       <div id="faqdivs3">
                           <ul>
                               <li className="faqtext"> An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct</li>
                               <li className="isak2">Isak Pettersson</li>
                           </ul>
                       </div>
                       </article>
                   </div>
               </section>
           </main>
          
        </Layout>
    );
}

export default FAQ;