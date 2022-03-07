import { FC, ReactElement, ReactNode } from 'react';

type PropsType = {
  id: string;
  // children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  children: ReactNode;
  className?: string;
};

export const SectionLayoutTemplate: FC<PropsType> = ({
  id,
  children,
  className = '',
  ...props
}): ReactElement => {
  const classNames = ['pt-6 section', className].join(' ');

  return (
    <section id={id} className={classNames} {...props}>
      {children}
    </section>
  );
};
