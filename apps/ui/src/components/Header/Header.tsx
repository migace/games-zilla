import classes from "./header.module.css";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

export const Header = ({ title, subtitle }: HeaderProps) => (
  <header className={classes.wrapper}>
    <h1 className={classes.title} data-cy="header-title">
      {title}
    </h1>
    {subtitle && (
      <h2 className={classes.subtitle} data-cy="header-subtitle">
        {subtitle}
      </h2>
    )}
  </header>
);
