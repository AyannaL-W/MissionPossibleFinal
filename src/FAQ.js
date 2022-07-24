import Accordion from 'react-bootstrap/Accordion'
import { useState } from "react";
import { Button } from 'bootstrap';

const FAQ = (Langue) => {
    
    const [FAQHeader1, setFAQHeader1] = useState('+ Est-ce que ');
    const [FAQBody1, setFAQBody1] = useState('Reponse 1');
    const [FAQHeader2, setFAQHeader2] = useState('+ Question 2');
    const [FAQBody2, setFAQBody2] = useState('Reponse 2');
    const [FAQHeader3, setFAQHeader3] = useState('+ Question 3');
    const [FAQBody3, setFAQBody3] = useState('Reponse 3');
    const [FAQHeader4, setFAQHeader4] = useState('+ Question 4');
    const [FAQBody4, setFAQBody4] = useState('Reponse 4');

    function PageLangue(section){
        if(Langue.LanguageId === "French"){
            if(section === "Q1") return "Est-ce que j'ai accès à tous les jeux au monde?";
            else if (section === "R1") return "Malheureusement non, ce n'est pas encore à ce niveau";
            else if (section === "Q2") return "Est-ce que je peux partager mes scores avec mes amis?";
            else if (section === "R2") return "Pas encore, mais bientôt!"
            else if (section === "Q3")   return "Est-ce que vous avez des objectifs pour Crash Bandicoot?";
            else if(section === "R3")    return "Oui, absolument! Va a la section Objectifs pour les voirs";
            else if (section === "Q4")   return "Est-ce que vous avez des objectifs pour COD : Vanguard?";
            else if(section === "R4")    return "Oui, absolument! Va a la section Objectifs pour les voirs";
        } else{
            if(section === "Q1") return "Do I have access to every game in the world?";
            else if (section === "R1") return "Unfortunately not, we are not at that level yet";
            else if (section === "Q2") return "Can I share my scores with my friends?";
            else if (section === "R2") return "Not yet, but soon!"
            else if (section === "Q3")   return "Do you have goals for Crash Bandicoot?";
            else if(section === "R3")    return "Yes, absolutely! You can go in the Goals section to see them";
            else if (section === "Q4")   return "Do you have goals for COD : Vanguard?";
            else if(section === "R4")    return "Yes, absolutely! You can go in the Goals section to see them";
        }
    }

    return (  
        <div className='mb-2'>
            <Accordion>
                FAQ
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>{PageLangue("Q1")}</Accordion.Header>
                    <Accordion.Body>{PageLangue("R1")}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>{PageLangue("Q2")}</Accordion.Header>
                    <Accordion.Body>{PageLangue("R2")}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>{PageLangue("Q3")}</Accordion.Header>
                    <Accordion.Body>{PageLangue("R3")}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>{PageLangue("Q4")}</Accordion.Header>
                    <Accordion.Body>{PageLangue("R4")}</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
 
export default FAQ;