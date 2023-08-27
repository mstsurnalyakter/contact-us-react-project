// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from "./ContactHeader.module.css"

const ContactHeader = () => {

  return (
    <section className={`${style.contact} container`}>
      <h1>CONTACT US</h1>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
    </section>
  );
}

export default ContactHeader