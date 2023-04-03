import { useMemo, useState } from "react";

import { IFighter } from "utils";
import Styled from "./style";
import StyledLayout from "layouts/style";
import { WrapperNavbar } from "components";
import { getFighters } from "services";
import { toast } from "react-toastify";
import { useEffectOnce } from "hooks";

const PageHome = () => {
  const [data, setData] = useState<IFighter[] | null>(null);

  useEffectOnce(() => {
    const fetch = async () => {
      const { error, result } = await getFighters();
      if (error) {
        toast.error("Get list fighters failed!", {
          position: toast.POSITION.TOP_CENTER,
          icon: "🍎",
        });
      } else {
        setData(result);
      }
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

  return (
    <>
      <WrapperNavbar title={"Home"} />
      <StyledLayout.Content>{content}</StyledLayout.Content>
    </>
  );
};

export default PageHome;
