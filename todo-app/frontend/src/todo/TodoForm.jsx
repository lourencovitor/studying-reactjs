import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

export default (props) => {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return (
    <div>
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Adicione uma tarefa"
            value={props.description}
            onKeyUp={keyHandler}
            onChange={props.handleChange}
          />
        </Grid>
        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
          <IconButton style="info" icon="search" onClick={props.handleSearch} />
          <IconButton
            style="default"
            icon="close"
            onClick={props.handleClear}
          />
        </Grid>
      </div>
    </div>
  );
};
