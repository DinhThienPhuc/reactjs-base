import { LoadingEllipsis } from "@phantomthief-react/components.loading-ellipsis";
import React, { useState, useEffect, ComponentType, Suspense } from "react";
import { toCamelCase } from "@phantomthief-react/utils";
import { IIconProps, ISingleIconProps } from "./_types";

export const Icon = ({ name, loadingProps, ...restProps }: IIconProps) => {
  const [IconComponent, setIconComponent] =
    useState<ComponentType<ISingleIconProps> | null>(null);

  useEffect(() => {
    // Reset IconComponent when name changes
    setIconComponent(null);

    // Dynamically import the SVG icon based on its name
    import(`./icons/_${name}.tsx`)
      .then((module) => {
        setIconComponent(() => module[`Icon${toCamelCase(name)}`]);
      })
      .catch((error) => console.error(`Icon not found: ${name}`, error));
  }, [name]);

  if (!IconComponent) {
    return null;
  }

  return (
    <Suspense
      fallback={<LoadingEllipsis size={4} color="#ffffff" {...loadingProps} />}
    >
      <IconComponent {...restProps} name={name} />
    </Suspense>
  );
};
