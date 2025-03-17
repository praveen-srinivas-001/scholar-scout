import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Scholarships = () => {

    const scholarships = [
        {
          "Scholarship": "Institute Merit-cum-Means Scholarship",
          "Courses":"B.Tech",
          "Profession":"UG",
          "Gender":"Male",
          "Region":"Tamilnadu",
          "Eligibility Criteria": "Parents annual income not exceeding Rs.4,50,000/-",
          "Amount Of Scholarship": "Available for 25% of students admitted. Renewal of scholarship every semester is subject to a minimum GPA of 5.0 in the previous semester. 67% Tuition fee exemption"
        },
        {
          "Scholarship": "Institute Free Studentship",
          "Eligibility Criteria": "Parents annual income not exceeding Rs.4,50,000/-",
          "Amount Of Scholarship": "Available for 25% of students admitted. Renewal of scholarship every semester is subject to a minimum GPA of 5.0 in the previous semester. 67% Tuition fee exemption"
        },
        {
          "Scholarship": "Institute Notional Prize",
          "Eligibility Criteria": "On the basis of rank in the JEE and parents annual income not exceeding Rs.4,50,000/-",
          "Amount Of Scholarship": "Available to 7% of students admitted. One time grant of Rs.1000"
        },
        {
          "Scholarship": "Institute SC/ST Scholarship",
          "Eligibility Criteria": "Parents annual income not exceeding Rs.4,50,000/-",
          "Amount Of Scholarship": "Free messing and pocket allowance of Rs. 250/- per month, over and above tuition fee exemption. Renewal of scholarship every semester is subject to a minimum GPA of 5.0 in the previous semester."
        },
        {
          "Scholarship": "Girish Ready Scholarship",
          "Eligibility Criteria": "1) On the basis of highest JEE rank and parents income not exceeding Rs.5,00,000/- (2 scholarships). 2) On the basis of best all round performance in the previous school years and parents annual income not exceeding Rs.5,00,000/- (one scholarship).",
          "Amount Of Scholarship": "Rs.25,000/- per year and the renewal of scholarship in the subsequent years is subject to a minimum GPA of 8 in the previous semester."
        },
        {
          "Scholarship": "Indian Women's Association at Bonn Scholarship",
          "Eligibility Criteria": "On the basis of rank in JEE and parents annual income up to 5 lakhs.",
          "Amount Of Scholarship": "Rs.1,250/- per month to one B.Tech student for 12 months only."
        },
        {
          "Scholarship": "Sri V Ranga Raju Memorial Scholarship",
          "Eligibility Criteria": "On the basis of Merit cum Means. Parents annual income up to Rs.5 lakhs. When MCM being equal, preference will be given to students from rural areas.",
          "Amount Of Scholarship": "Rs.500/- per month to one B.Tech student for 4 years. Renewal of scholarship every semester is subject to a minimum GPA of 5.0."
        },
        {
          "Scholarship": "Kanchi Kamakoti Jagadguru Sri Chandrasekarendra Saraswathi Endowment Award",
          "Eligibility Criteria": "On the basis of Merit cum Means. Parents annual income up to Rs. 5.5 lakhs",
          "Amount Of Scholarship": "One time payment of Rs.2,500/- to one student."
        },
        {
          "Scholarship": "M Sankaraiah and M Saradha (Mithigiri) Scholarship",
          "Eligibility Criteria": "Students of B.Tech / Dual Degree Electrical Engineering based on highest CGPA at the end of 4th semester.",
          "Amount Of Scholarship": "Rs 20,000/- (one time)"
        },
        {
          "Scholarship": "Dr K Vasanth Rau Scholarship",
          "Eligibility Criteria": "Based on JEE rank and parental income up to Rs. 5.50 lakhs. Renewable based on GPA of 6.5 and above.",
          "Amount Of Scholarship": "Rs 25,000/- per annum. One student for the entire duration of the programme."
        }
      ];      
    return (
      <>
        <Navbar />
        <div>
            <h2>AICTE Scholarships</h2>
            <ul>
                {scholarships.map((scholarship, index) => (
                    <div className="card-container" key={index}>
                        <h3>{scholarship.Scholarship}</h3>
                        <p><strong>Eligibility Criteria:</strong> {scholarship["Eligibility Criteria"]}</p>
                        <p><strong>Amount Of Scholarship:</strong> {scholarship["Amount Of Scholarship"]}</p>
                    </div>
                ))}
            </ul>
        </div>
        <Footer />
      </>
    );
};

export default Scholarships;

















