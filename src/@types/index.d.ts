declare module "*.jpg";
declare module "*.svg" {
  const content: any;
  export default content;
}

declare type NoClassName<T> = Omit<T, "className">;
declare type NoChildren<T> = Omit<T, "children">;

declare type ElementProps<T> = React.DetailedHTMLProps<
  React.HTMLAttributes<T>,
  T
>;

declare type ExtraClasses<T> = { extraClasses?: string } & T;

declare type BasicProps<T> = NoClassName<ExtraClasses<ElementProps<T>>>;
declare type BasicPropsNC<T> = NoChildren<ExtraClasses<ElementProps<T>>>;
