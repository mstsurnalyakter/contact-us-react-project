// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from "./Form.module.css"
import Button from '../Button/Button'
import { MdMessage, MdCall, MdEmail } from "react-icons/md";

const Form = () => {
  return (
    <section className={`${style.container}`}>
      <section className={`${style.form}`}>
        <section className={style.topbtn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </section>

        <Button
          isBtn2={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form>
          <section className={`${style.form_container}`}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </section>

          <section className={`${style.form_container}`}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </section>

          <section className={`${style.form_container}`}>
            <label htmlFor="text">Text</label>
            <textarea name="text" id="text" cols="30" rows="8"></textarea>
          </section>

          <section
                style={
                    {
                        display:"flex",
                        justifyContent:"flex-end"
                    }
                }
          >
            <Button text="SUBMIT" />
          </section>
        </form>
      </section>

      <section className={`${style.image}`}>
        <img src="/images/Service 24_7-pana 1.svg" alt="" />
      </section>
    </section>
  );
}

export default Form