import React from "react";

export type ImageProps = BasicProps<HTMLImageElement>;

export interface AvatarProps extends ImageProps {
  frameClasses?: string;
  src: string;
}

const Avatar: React.FC<AvatarProps> = ({
  extraClasses,
  frameClasses,
  ...props
}) => {
  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-full ${frameClasses}`}
    >
      <img
        className={`w-full h-auto mx-auto my-0 origin-top ${extraClasses}`}
        {...props}
      />
    </div>
  );
};

export default Avatar;
