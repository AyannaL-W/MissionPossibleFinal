import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Connexion = (Langue) => {

    function PageLangue(section){
        if(Langue.LanguageId === "French"){
            if(section === "nameplace") return "Veuillez mettre votre nom";
            else if (section === "name") return "Nom et Prénom";
            else if (section === "email") return "Addresse courriel";
            else if (section === "password") return "Mots de passe";
            else if(section === "emailplace") return "Veuillez mettre votre addresse courriel (ex: 123@gmail.com)";
            else if(section === "emailshare") return "On ne va jamais partager votre addresse";
            else if(section === "passwordplace") return "Veuillez mettre votre mot de passe";
            else if(section === "connexion") return "* Si vous n'avez pas déjà un compte ceci va en créer un";
        } else{
            if(section === "nameplace") return "Please enter your name";
            else if(section === "name") return "Name";
            else if (section === "email") return "Email";
            else if (section === "password") return "Password";
            else if(section === "emailplace") return "Please enter your email (ex: 123@gmail.com)";
            else if(section === "emailshare") return "We'll never share your email with anyone else.";
            else if(section === "passwordplace") return "Please enter your password";
            else if(section === "connexion") return "* If you don't already have an account this will create one for you";
        }
    }

    return ( 
        <div className="connexion">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>{PageLangue("name")}</Form.Label>
          <Form.Control type="name" placeholder={PageLangue("nameplace")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{PageLangue("email")}</Form.Label>
          <Form.Control type="email" placeholder={PageLangue("emailplace")} />
          <Form.Text className="text-muted">
            {PageLangue("emailshare")}
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>{PageLangue("password")}</Form.Label>
          <Form.Control type="password" placeholder={PageLangue("passwordplace")} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Connexion
        </Button>
        <Form.Text className="text-muted">
            {PageLangue("connexion")}
        </Form.Text>
      </Form>
    </div>
     );
}
 
export default Connexion;