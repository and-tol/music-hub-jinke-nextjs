import cls from 'classnames';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaChevronRight } from 'react-icons/fa';
import { FC, ReactElement } from 'react';

type PropsType = {
  text: string;
  onClick: () => any;
  activeItem?: string;
  icon?: boolean;
  textColored?: boolean;
  className?: string;
};

export const ButtonElement: FC<PropsType> = ({
  text,
  onClick,
  activeItem,
  icon = false,
  textColored = false,
  className = '',
  ...props
}): ReactElement => {
  return (
    <button
      className={cls(
        'button',
        'is-rounded',
        activeItem === text ? 'is-active' : '',
        textColored && 'text-colored',
        className
      )}
      onClick={onClick}
      {...props}
    >
      <span>{text}</span>

      {icon && (
        <span className='icon is-small'>
          <FaChevronRight />
          {/* <FontAwesomeIcon icon='chevron-right' /> */}
        </span>
      )}
    </button>
  );
};
