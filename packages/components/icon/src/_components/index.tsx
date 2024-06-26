import { LoadingEllipsis } from "@phantomthief-react/components.loading-ellipsis";
import React, { useState, useEffect, ComponentType } from "react";
import { toCamelCase } from "@phantomthief-react/utils";
import { IIconProps } from "../_types";

const iconPath = (name: string) => `./_${name}`;

export const Icon = ({ name, loadingProps, ...restProps }: IIconProps) => {
  const [IconComponent, setIconComponent] = useState<ComponentType | null>(
    null,
  );

  useEffect(() => {
    // Reset IconComponent when name changes
    setIconComponent(null);

    // Dynamically import the SVG icon based on its name
    import(iconPath(name))
      .then((module) => {
        setIconComponent(() => module[`Icon${toCamelCase(name)}`]);
      })
      .catch((error) => console.error(`Icon not found: ${name}`, error));
  }, [name]);

  // Render the imported icon or a placeholder
  return IconComponent ? (
    <IconComponent {...restProps} />
  ) : (
    <LoadingEllipsis size={4} color="#ffffff" {...loadingProps} />
  );
};
