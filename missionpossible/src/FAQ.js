import Accordion from 'react-bootstrap/Accordion'
import { useState } from "react";
import { Button } from 'bootstrap';

const FAQ = (Langue) => {
    
    const [FAQHeader1, setFAQHeader1] = useState('+ Question 1');
    const [FAQBody1, setFAQBody1] = useState('Reponse 1');
    const [FAQHeader2, setFAQHeader2] = useState('+ Question 2');
    const [FAQBody2, setFAQBody2] = useState('Reponse 2');
    const [FAQHeader3, setFAQHeader3] = useState('+ Question 3');
    const [FAQBody3, setFAQBody3] = useState('Reponse 3');
    const [FAQHeader4, setFAQHeader4] = useState('+ Question 4');
    const [FAQBody4, setFAQBody4] = useState('Reponse 4');

    const LangueChange = () => {
        if(Langue.LanguageId === "French"){
            setFAQHeader1('Home');
            setFAQBody1('Games');
            setFAQHeader2('Goals');
            setFAQBody2('Analisis');
            setFAQHeader3('Step by Step');
            setFAQBody3('Connexion');
            setFAQHeader4('English');
            setFAQBody4('idk');
        } else{
            setFAQHeader1('sdf');
            setFAQBody1('sdf');
            setFAQHeader2('sdf');
            setFAQBody2('sdf');
            setFAQHeader3('sdf');
            setFAQBody3('sdf');
            setFAQHeader4('sdf');
            setFAQBody4('sdf');
        }
    }

    return (  
        <div className='mb-2'>
            <Accordion>
                FAQ
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>{FAQHeader1}</Accordion.Header>
                    <Accordion.Body>{FAQBody1}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>{FAQHeader2}</Accordion.Header>
                    <Accordion.Body>{FAQBody2}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>{FAQHeader3}</Accordion.Header>
                    <Accordion.Body>{FAQBody3}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>{FAQHeader4}</Accordion.Header>
                    <Accordion.Body>{FAQBody4}</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
 
export default FAQ;