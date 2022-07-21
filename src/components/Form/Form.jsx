import React, { Component } from "react";
import { nanoid } from "nanoid";
import s from "./Form.module.css";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

class Form extends Component {
  state = {
    name: "",
    surname: "",
    birthDate: "",
    phone: "",
    website: "",
    about: "",
    technologies: "",
    lastProject: "",
    isError: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: "",
      surname: "",
      birthDate: "",
      phone: "",
      website: "",
      about: "",
      technologies: "",
      lastProject: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ id: nanoid(), ...this.state });
    this.reset();
  };

  render() {
    const {
      name,
      surname,
      birthDate,
      phone,
      website,
      about,
      technologies,
      lastProject,
      isError,
    } = this.state;

    return (
      <form className={s.form}>
        <Input
          label="Имя"
          type="text"
          name="name"
          value={name}
          placeholder="пример: Екатерина"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          message="Фамилия может содержать только буквы, апостроф, тире и пробелы."
          onChange={this.handleChange}
        />

        {isError && <ErrorMsg message={"Error Message"} />}

        <Input
          label="Фамилия"
          type="text"
          name="surname"
          value={surname}
          placeholder="пример: Борисенко"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          message="Фамилия может содержать только буквы, апостроф, тире и пробелы."
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <Input
          label="Дата Рождения"
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <Input
          label="Телефон"
          type="tel"
          name="phone"
          value={phone}
          placeholder="пример: +38 098 205 XX XX"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          message="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <Input
          label="Сайт"
          type="text"
          name="website"
          value={website}
          placeholder="пример: https://website.com"
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <TextArea
          label="О себе"
          name="about"
          value={about}
          rows={7}
          placeholder="Напишите коротко о себе ..."
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <TextArea
          label="Стек технологий"
          name="technologies"
          value={technologies}
          rows={7}
          placeholder="Перечислите стек технологий которыми Вы владеете..."
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <TextArea
          label="Описание последнего проекта"
          name="lastProject"
          value={lastProject}
          rows={7}
          placeholder="Опишите свой последний проект..."
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <div className={s.buttonWrapper}>
          <Button text="Отменить" type="button" onClick={this.reset} />
          <Button text="Сохранить" type="submit" onClick={this.handleSubmit} />
        </div>
      </form>
    );
  }
}
export default Form;
