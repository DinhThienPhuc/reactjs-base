import React, { ComponentType, Suspense, useEffect, useState } from "react";

import { LoadingEllipsis } from "@phantomthief-react/components.loading-ellipsis";
import { toCamelCase } from "@phantomthief-react/utils.helpers";

import { IIconProps, ISingleIconProps } from "./_types";

export const Icon = ({
  name,
  loadingProps,
  htmlAttributes,
  color = "#ffffff",
  width = 24,
  height = 24,
  className = "",
}: IIconProps) => {
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
    return <LoadingEllipsis size={4} color="#ffffff" {...loadingProps} />;
  }

  return (
    <Suspense>
      <IconComponent
        className={className}
        color={color}
        name={name}
        width={width}
        height={height}
        htmlAttributes={htmlAttributes}
      />
    </Suspense>
  );
};
