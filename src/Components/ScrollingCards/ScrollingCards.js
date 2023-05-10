import React from "react";
import styles from "./ScrollingCards.module.css";
import { Cards } from "../Cards/Card";

export function ScrollingCards() {
  const cardsArray = [
    {
      image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fpritesh.3b7c44ee9f2c717c5301037740bb6eb6.jpeg&w=1920&q=75",
      name: "Pritesh Kumar , IIT Delhi",
      title: "CTO @ FunctionUp",
      description: "9 Yrs Exp.",
    },
    {
      image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanubhav.6a3b4e1b4097967be9b5418ab786f1ce.jpeg&w=1920&q=75",
      name: "Anubhav Singh , IIT Kanpu",
      title: "Co-founder @ Dubdub.ai",
      description: "7 Yrs Exp.",
    },
    {
      image:
        "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906235709x512347696206974850%2FMentor-4.jpeg&w=1920&q=75",
      name: "Aviral Sharma , IIT Delhi",
      title: "Data Scientist Manager @ Optum",
      description: " 7 Yrs Exp.",
    },
    {
      image:
        "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906303309x809592985984049700%2F1517597437249.jpeg&w=1920&q=75",
      name: "Rahul Garg , IIT Kanpur",
      title: "Co-founder @ Dubdub.ai",
      description: "7 Yrs Exp.",
    },
    {
      image:
        "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906339831x204777177063368830%2F1669699961094.jpeg&w=1920&q=75",
      name: "Uddhav Bamba , IIT Dhanbad",
      title: "Applied Scientist @ Amazon",
      description: "3 Yrs Exp.",
    },
    {
      image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanchal.b2ab3290c2c9167be3c3ca3a0487eff9.jpeg&w=1080&q=75",
      name: "Anchal Jaiswal,IIT Kanpur",
      title: "Senior Data Scientist @ Tredence",
      description: "7 Yrs Exp.",
    },
    {
      image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Frahul.05ecf431785ed6ed909ee4f781bf14fc.jpeg&w=1080&q=75",
      name: "Rahul Sankhwar,IIT Kanpur",
      title: "Senior Data Scientist @ Sharechat",
      description: "6 Yrs Exp.",
    },
    {
      image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fgaurav.72b71c73fd8e8ddd0a5e0ec77acdec55.jpeg&w=1080&q=75",
      name: "Gaurav Agarwal,IIT Delhi",
      title: "Senior Engineer @ Uber California",
      description: "9 Yrs Exp.",
    },
    {
      image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fmohak.ce40166641bc8640b263d6cbfdac27af.jpeg&w=1080&q=75",
      name: "Mohak Sahu , IIT Bombay",
      title: "CTO @ Languify",
      description: "3 Yrs Exp.",
    },
    {
      image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fdivij.e38501ee35233aae10ca4da99b3662f9.jpeg&w=1080&q=75",
      name: "Divij Bajaj",
      title: "Data Scientist @ Microsoft",
      description: "5 Yrs Exp.",
    },
    {
      image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fsujit.2852909511d1395b806d66292e7112a3.jpeg&w=1080&q=75",
      name: "Senior IT Platform Architect, ZF",
      title: "Group, Germany",
      description: "11 Yrs Exp.",
    },
    {
      image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fsaurabh.ed5108e35e28de3fb2583f997239bb38.jpg&w=1080&q=75",
      name: "Sourabh Bagrecha",
      title: "Software Engineer @Postman",
      description: "***",
    },
    {
      image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Faakansha.4e4c8f7a1acf2f68a094362e49d9dc64.jpg&w=1080&q=75",
      name: "Aakansha Jain",
      title: "SDE @Amazon",
      description: "***",
    },
    {
      image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fsaptarshi.0260a3c732c54764cf0cd22e82f588cd.jpg&w=1080&q=75",
      name: "Saptarshi Adhikery",
      title: "SDE @Notional Systems",
      description: "***",
    },
    {
      image:
        "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Abinav",
      title: "Designer",
      description: "***",
    },
    {
      image:
        "https://images.pexels.com/photos/10040258/pexels-photo-10040258.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Sujata kumari",
      title: "AI Developer",
      description: "***",
    },
    {
      image:
        "https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Harshit",
      title: "Software Developer",
      description: " ***",
    },
  ];
  return (
    <div className={styles.scrolling_cards}>
      {cardsArray.map((card, index) => (
        <Cards
          key={index}
          cardImage={card.image}
          cardName={card.name}
          cardTitle={card.title}
          cardDescription={card.description}
        />
      ))}
    </div>
  );
}
