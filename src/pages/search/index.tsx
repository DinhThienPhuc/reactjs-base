import { useCallback, useState } from "react";

import { _Components } from "components";

const PageSearch = () => {
  const [loading, setLoading] = useState(false);

  const onClick = useCallback(() => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 5000);
  }, []);

  return (
    <>
      Search page
      <br />
      <br />
      <br />
      <br />
      <_Components.Button
        variant="contained"
        loading={loading}
        onClick={onClick}
      >
        Test loading
      </_Components.Button>
    </>
  );
};

export default PageSearch;
