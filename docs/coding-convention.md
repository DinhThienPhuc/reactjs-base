# Coding convention

Most of the time, the convention is extended from TypeScript and React best practice convention.
These custom code convetion below is for this template only.

## Order of a component's props

- In order to overide components with styled-css, we should put the props in the order below:

```javascript
<Styled.Component
  {/* Spread props usually go first */}
  {...restProps}

  {/* Transient props go second */}
  $disabled={disabled}

  {/* Component custom attributes go third */}
  size={16}
  color={disabled ? "#ffffff80" : "#ffffff"}
  font={VERNADA_FONT}

  {/* Class and data value are in the end */}
  className={clsx("class-name")}
  data-testid="component-test-id"
/>
```
