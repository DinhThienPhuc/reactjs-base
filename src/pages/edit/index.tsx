import { Controller, useForm } from "react-hook-form";
import { DEFAULT_AVATAR, IFighter, _Utils } from "utils";
import {
  ArrowLeft as IconArrowLeft,
  Save as IconSave,
  Trash2 as IconTrash2,
} from "react-feather";
import { SelectFighterButton, WrapperButton } from "components";
import { SyntheticEvent, useCallback, useEffect, useMemo } from "react";
import { deleteFighter, getFighterById, setFighter } from "services";
import { useAvatar, useCompareFighters } from "store";
import { useNavigate, useParams } from "react-router-dom";

import ROUTES from "routes/constants";
import Styled from "pages/edit/style";
import StyledLayout from "layouts/style";
import { toast } from "react-toastify";

const formFields = [
  {
    label: "Avatar url",
    id: "avatar",
  },
  {
    label: "Name",
    id: "name",
  },
  {
    label: "Epithet",
    id: "epithet",
  },
  {
    label: "Height",
    id: "height",
  },
  {
    label: "Weight",
    id: "weight",
  },
  {
    label: "Win/Lose Rate",
    id: "winLoseRate",
  },
  {
    label: "Fighting Styles",
    id: "fightingStyles",
  },
];

type IFormFighter = Omit<IFighter, "fightingStyles"> & {
  fightingStyles: string;
};

const PageEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { handleSubmit, control, setValue, getValues } =
    useForm<IFormFighter>();
  const toggleSelectFighter = useCompareFighters(
    (state) => state.toggleSelectFighter,
  );
  const setUrl = useAvatar((state) => state.setUrl);

  const goBackDetailPage = useCallback(() => {
    navigate(`${ROUTES.DETAIL}/${id}/view`);
  }, [id, navigate]);

  const updateFighterInfo = useCallback(
    async (data: IFormFighter) => {
      const payload = {
        ...data,
        id: id + "",
        avatar:
          !data?.avatar || data?.avatar === _Utils.NOT_AVAILABLE
            ? DEFAULT_AVATAR
            : data?.avatar,
        name: data?.name || _Utils.NOT_AVAILABLE,
        epithet: data?.epithet || _Utils.NOT_AVAILABLE,
        height: data?.height || _Utils.NOT_AVAILABLE,
        weight: data?.weight || _Utils.NOT_AVAILABLE,
        winLoseRate: data?.winLoseRate || _Utils.NOT_AVAILABLE,
        fightingStyles: data?.fightingStyles
          ? data?.fightingStyles.split(", ")
          : [_Utils.NOT_AVAILABLE],
      };

      const { error } = await setFighter(payload);

      const action = error ? "error" : "success";
      toast[action]?.(`Update fighter ${payload.name} ${action}!`, {
        position: toast.POSITION.TOP_CENTER,
        icon: error ? "🍎" : "🥬",
      });

      goBackDetailPage();
    },
    [goBackDetailPage, id],
  );

  const fetchFighterData = useCallback(async () => {
    const { error, result } = await getFighterById(id + "");
    if (error) {
      toast.error("Get fighter information failed!", {
        position: toast.POSITION.TOP_CENTER,
        icon: "🍎",
      });
    } else {
      setUrl(result?.avatar);

      setValue("avatar", result?.avatar || "");
      setValue("name", result?.name || "");
      setValue("epithet", result?.epithet || "");
      setValue("height", result?.height || "");
      setValue("weight", result?.weight || "");
      setValue("winLoseRate", result?.winLoseRate || "");
      setValue(
        "fightingStyles",
        result?.fightingStyles ? result?.fightingStyles.join(", ") : "",
      );
    }
  }, [id, setUrl, setValue]);

  const clearValue = useCallback(
    (key: string) => () => {
      setValue(key, "");
      if (key === "avatar") {
        setUrl("");
      }
    },
    [setUrl, setValue],
  );

  const handleChangeAvatar = useCallback(
    (onChange: (e: SyntheticEvent) => void) => (e: SyntheticEvent) => {
      onChange?.(e);
      setUrl(getValues("avatar"));
    },
    [getValues, setUrl],
  );

  const formContent = useMemo(() => {
    return formFields.map(({ label, id }) => (
      <Controller
        key={id}
        render={({ field }) => (
          <Styled.Input
            label={label}
            fullWidth
            clear={clearValue(id)}
            {...field}
            onChange={
              id === "avatar"
                ? handleChangeAvatar(field.onChange)
                : field.onChange
            }
          />
        )}
        name={id}
        control={control}
      />
    ));
  }, [clearValue, control, handleChangeAvatar]);

  const handleToggleSelectFighter = useCallback(
    () => toggleSelectFighter(id + ""),
    [id, toggleSelectFighter],
  );

  const handleDeleteFighter = useCallback(async () => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(
        `Do you want to delete ${getValues("name")}? This cannot be undone!`,
      )
    ) {
      const { error } = await deleteFighter(id as string);
      const action = error ? "error" : "success";
      toast[action]?.(`Delete fighter ${getValues("name")} ${action}!`, {
        position: toast.POSITION.TOP_CENTER,
        icon: error ? "🍎" : "🥬",
      });
      navigate(ROUTES.HOME);
    }
  }, [getValues, id, navigate]);

  useEffect(() => {
    fetchFighterData();
  }, [fetchFighterData]);

  return (
    <>
      <Styled.Navbar
        title={""}
        leftIcon={<IconArrowLeft />}
        rightIcon={<SelectFighterButton fighterId={id + ""} />}
        onLeftClick={goBackDetailPage}
        onRightClick={handleToggleSelectFighter}
      />
      <StyledLayout.Content>
        <Styled.AvatarPreview fighterId={id + ""} />
        <Styled.Box>{formContent}</Styled.Box>

        <Styled.ButtonGroup justifyContent="space-between">
          <Styled.DeleteButton variant="outlined" onClick={handleDeleteFighter}>
            <Styled.WrapIcon>
              <IconTrash2 width={16} height={16} />
            </Styled.WrapIcon>{" "}
            Delete
          </Styled.DeleteButton>
          <WrapperButton
            variant="outlined"
            onClick={handleSubmit(updateFighterInfo)}
          >
            <Styled.WrapIcon>
              <IconSave width={16} height={16} />
            </Styled.WrapIcon>{" "}
            Save
          </WrapperButton>
        </Styled.ButtonGroup>
      </StyledLayout.Content>
    </>
  );
};

export default PageEdit;
