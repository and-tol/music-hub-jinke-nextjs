import {GetStaticProps, NextPage} from 'next';
import { ReactElement } from 'react';

type PropsType = {
  children?: never;
}

const TopsPage: NextPage<PropsType> = (): ReactElement=> {
  return (
    <div>
      Tops
    </div>
  );
}

export const getStaticProps:GetStaticProps = async (ctx) => {


  return {
    props:{
      data:null
    }
  }
}

export default TopsPage;
