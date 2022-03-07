import cls from 'classnames';
import { FC, ReactElement } from 'react';

type PropsType = {
  title: string;
  isCentered?: boolean;
  isClickable?: boolean;
  onClick?: () => void;
};

export const SectionTitleElement: FC<PropsType> = ({
  title = '',
  isCentered = true,
  isClickable = false,
  onClick,
}): ReactElement=> {
  return (
    <div className='container'>
      <h2
        className={cls(
          'title',
          'is-3',
          'mb-5',
          isCentered && 'has-text-centered',
          isClickable && 'is-clickable'
        )}
        onClick={onClick}
      >
        {title}
      </h2>
    </div>
  );
};
