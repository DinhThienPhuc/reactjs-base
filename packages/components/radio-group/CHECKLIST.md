# Component checklist

- 🧩 Regularly verify component re-renders.
- 🧩 Utilize named exports for components.

```typescript
export const TextField = () => <></>
```

- 🧩 Isolate conditionally displayed elements into separate files and dynamically import them as needed using lazy loading. This might result in a larger bundle size, so please choose whether to focus on the split strategy or the bundle size

```typescript
const HelperText = lazy(() =>
  import("@phantomthief-react/components.helper-text").then((module) => ({
    default: module.HelperText,
  })),
);

<Suspense>
  {helperTextProps?.children && (
    <HelperText
      {...helperTextProps}
      isError={!!error}
      variant={variant}
    >
      {error?.message ?? helperTextProps?.children ?? ""}
    </HelperText>
  )}
</Suspense>
```

- 🧩 Specify the full name of components/modules within the same scope in the package.json.

```typescript
// Inside components.text-field
import { HelperText } from "@phantomthief-react/components.helper-text";
```

- 🧩 For components/modules outside the current scope, reference the parent package.

```typescript
// Inside components.text-field
import { useSyncStateWithProps } from "@phantomthief-react/hooks";
```

- 🧩 Prop ordering in components should adhere to the following guidelines:

```typescript
<Component
  {...htmlAttributes}       // Place carefully
  $fullWidth={fullWidth}    // Transient props, might deprecated too when use TaiwindCSS
  inputProps={{}}           // Override element props
  className="test-clsx"     // HTML native attributes
```

- 🧩 Prefix interfaces with I and types with T.

```typescript
export interface ITextFieldProps
  extends HTMLAttributes<HTMLElement>,
    IFormFieldProps,
    IExtendable {
  variant?: TTextFieldVariant;
  clear?: TFunction<void>;
  captureOnFocus?: (e: React.FocusEvent<HTMLElement, Element>) => void;
  captureOnBlur?: (e: React.FocusEvent<HTMLElement, Element>) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  labelProps?: ILabelProps;
  preAdormentProps?: IPreAdormentProps;
  postAdormentProps?: IPostAdormentProps;
  helperTextProps?: IHelperTextProps;
}

export type TTextFieldVariant =
  (typeof TEXT_FIELD_VARIANT)[keyof typeof TEXT_FIELD_VARIANT];
```

- 🧩 Refrain from using styled-components to wrap and customize other components. Reserve this approach for use within the applications only.

```typescript
// DON'T
// In modules.accordion
ItemHeaderSectionGroup: styled(FlexBox)`
  flex-grow: 1;
`,

// DO
ItemHeaderSectionGroup: styled.span`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`,

// DO
// Only use in applications. Example for using in my-portfolio
Details: styled(FlexBox)`
  padding: 30px;
`,
```

- 🧩 Minimize the use of HTML tags to reduce the complexity of the HTML DOM.

- 🧩 Create a story for the component with split load chunks.

```typescript
export const LazyLoad: Story = {
  args: {
    variant: "outlined",
    loading: true,
    loadingComponent: <>...</>,
  },
  render: function Render(args) {
    const [loadingComponent, setLoadingComponent] = useState(
      args.loadingComponent,
    );

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <Button {...args} loadingComponent={loadingComponent} />
        <button
          style={{ marginTop: 48 }}
          onClick={() =>
            setLoadingComponent((prev) => (prev ? null : args.loadingComponent))
          }
        >
          Toggle show custom loading component
        </button>
        <p style={{ color: "#ffffff" }}>
          Please note: To replicate this lazy behavior, comment out the
          CustomLoading story. Otherwise, the LoadingRipple will still load due
          to the definition of the CustomLoading story.
        </p>
      </div>
    );
  },
};
```

- 🧩 Utilize the htmlAttributes prop to add standard HTML attributes. Apply this to each element within the component as well.

- 🧩 Utilize Tailwind CSS to decrease the bundle size of package.

- 🧩 Consider using SVG images instead of components for better performance

- 🧩 Include a story that demonstrates how the HTML attributes function
