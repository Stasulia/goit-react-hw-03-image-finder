import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="rgb(164, 218, 220)"
      ariaLabel="circles-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      }}
      visible={true}
    />
  );
};
