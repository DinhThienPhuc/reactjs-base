import { Navbar, _Components } from "components";
import { useMemo, useState } from "react";

import { IFighter } from "utils";
import Styled from "pages/home/style";
import StyledLayout from "layouts/style";
import { _Hooks } from "hooks";
import { getFighters } from "services";
import { toast } from "react-toastify";

const PageHome = () => {
  const [data, setData] = useState<IFighter[] | null>(null);
  const [loading, setLoading] = useState(false);

  _Hooks.useEffectOnce(() => {
    const fetch = async () => {
      setLoading(true);
      const { error, result } = await getFighters();
      if (error) {
        toast.error("Get list fighters failed!", {
          position: toast.POSITION.TOP_CENTER,
          icon: "🍎",
        });
      } else {
        setData(result);
      }
      setLoading(false);
    };

    fetch();
  });

  const content = useMemo(() => {
    return data?.map((fighter) => (
      <Styled.Card
        key={fighter.id}
        id={fighter.id}
        name={fighter.name}
        epithet={fighter.epithet}
        avatar={fighter.avatar}
      />
    ));
  }, [data]);

  if (loading) {
    return <_Components.LoadingEllipsis color="#11dce8" fullScreen />;
  }

  return (
    <>
      <Navbar title={"Home"} />
      <StyledLayout.Content>{content}</StyledLayout.Content>
    </>
  );
};

export default PageHome;
