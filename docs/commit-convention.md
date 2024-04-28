# Coding convention

Most of the time, the convention is extended from TypeScript and React best practice convention.
These custom code convetion below is for this template only.

## Order of a component's props

In order to overide components with styled-css, we should put the props in the order below:

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

## Modify style

When there is some style that could be grouped, we can write a `modify` function to custom and isolate the style.

This modify function should be named as the following rules:

- When modify the whole style of element:

```javascript
// For FlexBox component
const modifyFlexBox = () => css``;

export const Styled = {
  Div: styled.div`
    ${modifyFlexBox};
  `,
};
```

- When modify part of element, name it clearly to describe what modification it does:

```javascript
// Label component has modification for its position
const modifyLabelPosition = () => css``;

export const Styled = {
  Container: styled.div`
    ${modifyLabelPosition};
  `,
};
```
