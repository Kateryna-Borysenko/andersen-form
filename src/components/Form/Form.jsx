import React, { Component } from "react";
import { nanoid } from "nanoid";
import s from "./Form.module.css";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";

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
    } = this.state;

    return (
      <form className={s.form}>
        <div className="formWrapper">
          <Input
            label="Имя"
            type="text"
            name="name"
            value={name}
            placeholder="пример: Екатерина"
            onChange={this.handleChange}
          />

          <Input
            label="Фамилия"
            type="text"
            name="surname"
            value={surname}
            placeholder="пример: Борисенко"
            onChange={this.handleChange}
          />

          <Input
            label="Дата Рождения"
            type="date"
            name="birthDate"
            value={birthDate}
            onChange={this.handleChange}
          />

          <Input
            label="Телефон"
            type="tel"
            name="phone"
            value={phone}
            placeholder="пример: +38 098 205 XX XX"
            onChange={this.handleChange}
          />

          <Input
            label="Сайт"
            type="text"
            name="website"
            value={website}
            placeholder="пример: https://website.com"
            onChange={this.handleChange}
          />

          <TextArea
            label="О себе"
            name="about"
            value={about}
            rows={7}
            placeholder="Напишите коротко о себе ..."
            onChange={this.handleChange}
          />

          <TextArea
            label="Стек технологий"
            name="technologies"
            value={technologies}
            rows={7}
            placeholder="Перечислите стек технологий которыми Вы владеете..."
            onChange={this.handleChange}
          />

          <TextArea
            label="Описание последнего проекта"
            name="lastProject"
            value={lastProject}
            rows={7}
            placeholder="Опишите свой последний проект..."
            onChange={this.handleChange}
          />

          <div className={s.buttonWrapper}>
            <Button text="Отменить" type="button" onClick={this.reset} />
            <Button text="Добавить" type="button" onClick={this.handleSubmit} />
          </div>
        </div>
      </form>
    );
  }
}
export default Form;
