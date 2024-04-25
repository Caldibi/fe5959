import { Card } from "../components/Card";
//import {IconBox} from "../components/IconBox.jsx"
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


const Card1 = {
    
    Title: "Facebook",
    Paragraph: "Kurucuları: Mark Zuckerberg, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, Chris Hughes",
    Name : <BsFacebook/>
    
};
const Card2 = {
    
    Title: "Twitter-X",
    Paragraph: "Kurucuları: Jack Dorsey, Biz Stone, Noah Glass, Evan Williams",
    Name : <BsTwitterX/>
    };
const Card3 = {
    
    Title: "Linkendin",
    Paragraph: "Kurucuları: Reid Hoffman, Konstantin Guericke, Eric Ly, Allen Blue, Jean-Luc Vaillant",
    Name : <BsLinkedin/>
    
};
const Card4 = {
   
    Title: "İnstagram",
    Paragraph: " Kurucuları: Kevin Systrom ve Mike Krieger",
    Name : <BsInstagram/>
    
};
const Card5 = {
    
    Title: "Tiktok",
    Paragraph: "Kurucuları: ByteDance'in kurucusu Zhang Yiming",
    Name : <BsTiktok/>
    
};
const Card6 = {
   
    Title: "Whatsapp",
    Paragraph: "Kurucuları: Jan Koum, Brian Acton",
    Name : <BsWhatsapp/>
    
};

const Cards  = [Card1, Card2, Card3, Card4, Card5, Card6];

export function Features() {
    return (
        <>
            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        {Cards.map((Cards, ) => (    
                        <Card Name={Cards.Name} Title={Cards.Title} Paragraph={Cards.Paragraph}/> 
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}