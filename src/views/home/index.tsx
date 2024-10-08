import { FC, useEffect } from 'react';

interface IIndex {}

const index: FC<IIndex> = () => {
  useEffect(() => {
    return () => {};
  }, []);

  const handleClick = () => {};

  return <div onClick={handleClick}>HOME</div>;
};

export default index;
