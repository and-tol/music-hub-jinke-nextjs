// Core
import { useRouter } from 'next/router';
import { FC, ReactElement, SyntheticEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

// import { api } from 'src/api';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Loader } from 'src/shared/components/Loader';
// import { Portal } from 'src/components/Portal';
// import { useSearchedContext } from 'src/context';

type PropsType = {
  styleInput?: string;
  styleForm?: string;
  name?: string;
};

interface IFormInputs {
  [key: string]: string;
}

export const SearchFormComponent: FC<PropsType> = ({
  styleInput = '',
  styleForm = '',
  name = 'search',
}): ReactElement=> {
  const router = useRouter();

  // const { setSearchedData } = useSearchedContext();

  const { register, watch, reset } = useForm<IFormInputs>({
    defaultValues: {},
  });
  const watchSearch = watch(name);

  const {
    data: dataSearchedTracks,
    isLoading,
    refetch,
  } = useQuery(
    ['seachedTracks'],
    // ['seachedTracks', watchSearch],
    // () => api.tracks.getByFilter(watchSearch),
    () => null,
    {
      initialData: {},
      enabled: false,
    }
  );

  // FIXME
  // useEffect(() => {
  //   if (!!dataSearchedTracks.result?.length) {
  //     // setSearchedData(dataSearchedTracks);
  //   }
  // }, [dataSearchedTracks]);

  const handleSearch = () => {
    router.push('/search');
    refetch();
    reset();
  };

  const handleSearchEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && watchSearch) {
      event.preventDefault();
      router.push('/search');
      refetch();
      reset();
    }
  };

  let classNameForm = ['is-flex is-align-items-center', styleForm].join(' ');
  let classNameInput = ['input is-rounded', styleInput].join(' ');

  return (
    <>
      <form className={classNameForm}>
        <div className='control has-icons-right is-100'>
          <input
            {...register('search')}
            type='text'
            className={classNameInput}
            placeholder='Search'
            // TODO add type
            // onKeyDown={handleSearchEnter}
          />
          <span
            className='icon is-small is-right is-flex is-align-items-center is-clickable'
            onClick={handleSearch}
          >
            {/* <FontAwesomeIcon icon='search' /> */}
          </span>
        </div>
      </form>
      {isLoading && (
        <></>
        // <Portal>
        //   <Loader />
        // </Portal>
      )}
    </>
  );
};
