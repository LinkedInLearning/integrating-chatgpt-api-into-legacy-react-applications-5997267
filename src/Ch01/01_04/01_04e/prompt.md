# Prompt Details

## Prompt 1

```
Can you explain what this component does?

const AddColorForm = ({ onNewColor = (f) => f }) => {
  let _title, _color;

  const submit = (e) => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
    _title.value = "";
    _color.value = "#000000";
    _title.focus();
  };

  return (
    <form className="add-color" onSubmit={submit}>
      <input
        ref={(input) => (_title = input)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        ref={(input) => (_color = input)}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  );
};
```

## Prompt 2

```
What would be the cleanest way to refactor this into a function component that uses modern syntax?
```

## Prompt 3

```
Which parts should be changed first to reduce risk?
```