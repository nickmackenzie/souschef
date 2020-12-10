<div className="item-container" key={name}>
  <form className="form-con" onSubmit={this.handleSubmit}>
    {" "}
    <input
      name="stock"
      data-stock={name}
      data-par={Friday}
      data-unit={unit}
      type="number"
      max={Friday}
      min="0"
      defaultValue="0"
      onChange={this.valueChange}
    ></input>
    <div>
      {" "}
      <Button
        data-stock={name}
        data-par={Friday}
        data-name={name}
        value={name}
        id={name}
        name={name}
        data-name={name}
        className="btn"
        onClick={(e) =>
          this.props.addToList([
            e.target.value,
            e.target.dataset.stock,
            e.target.dataset.par,
            e.target.dataset.unit,
          ])
        }
        data-name={name}
        type="submit"
        className="btn"
      >
        {name}
      </Button>
      {category}
    </div>
  </form>
</div>;
