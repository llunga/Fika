## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `info` | _string_ | `default` |
| size | Can be set to `large` `medium` `small` | _string_ | `large` |
| plain | Whether to be plain button | _boolean_ | `false` |
| disabled | Whether to disable button | _boolean_ | `false` |

### Type

```html
<f-button type="primary">Primary</f-button>
<f-button type="info">Info</f-button>
<f-button type="default">Default</f-button>
```

### Plain

```html
<f-button plain type="default">Default__plain</f-button>
<f-button plain type="primary">Primary__plain</f-button>
<f-button plain type="info">Info__plain</f-button>
```

### Disabled

```html
<f-button disabled type="primary">Diabled</f-button>
<f-button disabled type="info">Diabled</f-button>
```

### Size

```html
<f-button type="primary" size="large">Large</f-button>
<f-button type="primary" size="medium">Medium</f-button>
<f-button type="primary" size="small">Small</f-button>
```

### Slots

| Name              | Description         |
| ----------------- | ------------------- |
| default           | Default slot        |
