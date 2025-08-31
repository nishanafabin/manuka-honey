import React from "react"
import "./Certifications.css"

// Import certificate images
import certificate1 from "../assets/certifications1.png"
import certificate2 from "../assets/certifications2.png"
import certificate3 from "../assets/certifications3.png"
import certificate4 from "../assets/certifications4.png"
import certificate5 from "../assets/certifications5.png"
import certificate6 from "../assets/certifications6.png"

const certifications = [
  {
    img: certificate1,
    
    desc: "The UMF Grading system appraises natural markers found in manuka honey and assures purity and quality."
  },
  {
    img: certificate2,
    
    desc: "Our honey is certified and in compliance with the Non-GMO Project Standard."
  },
  {
    img: certificate3,
    
    desc: "Every batch of our honey is tested in independent laboratories to ensure it is glyphosate free."
  },
  {
    img: certificate4,
    
    desc: "Certified by FIANZ, The Federation of Islamic Associations of New Zealand (Inc)."
  },
  {
    img: certificate5,
    
    desc: "We are Fernmark accredited and approved by the NZ Government as a trusted exporter."
  },
  {
    img: certificate6,
    
    desc: "Our independent certification shows you the exact MGO levels in our manuka honey."
  },
]

export default function Certifications() {
  return (
    <section className="certifications">
      <h2 className="certifications-title">CREDENTIALS</h2>
      <div className="certifications-grid">
        {certifications.map((item, index) => (
          <div className="cert-card" key={index}>
            <img src={item.img} alt={item.title} className="cert-logo" />
            
            <p className="cert-desc">{item.desc}</p>
          </div>
        ))}
      </div>
      <button className="cert-btn">FIND OUT MORE</button>
    </section>
  )
}
