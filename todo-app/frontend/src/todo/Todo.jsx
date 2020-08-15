import React, { Component } from "react";
import axios from "axios";
import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const URL = "http://localhost:8000/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      list: [],
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPeding = this.handleMarkAsPeding.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.refresh();
  }

  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((resp) =>
        this.setState({ ...this.state, description, list: resp.data })
      );
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then((resp) => this.refresh());
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then((res) => {
      this.refresh(this.state.description);
    });
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then((res) => {
      this.refresh(this.state.description);
    });
  }

  handleMarkAsPeding(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then((res) => {
      this.refresh(this.state.description);
    });
  }

  handleClear() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          description={this.state.description}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPeding={this.handleMarkAsPeding}
        />
      </div>
    );
  }
}
