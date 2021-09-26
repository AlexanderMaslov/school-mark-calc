import type { RouteComponentProps } from '@reach/router';
import { WiredButton } from 'react-wired-elements';

export const Calculate = (props: RouteComponentProps) => {
  const handleClick = () => {
    //
  };

  return (
    <>
      <WiredButton onClick={handleClick}>Fetch</WiredButton>
    </>
  );
};
