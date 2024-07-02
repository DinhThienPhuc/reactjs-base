import { CustomButton } from "../../../components/custom-button";
import { Typography } from "@phantomthief-react/components";
import { Controller, useForm } from "react-hook-form";
import { IContactFormData } from "./types";
import { Styled } from "./style";

export const ContactForm = () => {
  const { handleSubmit, control } = useForm<IContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: IContactFormData) => {
    console.log("RHFController form data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography color="#607b96" size={16}>
        _name:
      </Typography>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Styled.TextField {...field} variant="outlined" fullWidth />
        )}
      />
      <Typography color="#607b96" size={16}>
        _email:
      </Typography>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Styled.TextField {...field} variant="outlined" fullWidth />
        )}
      />
      <Typography color="#607b96" size={16}>
        _message:
      </Typography>
      <Controller
        control={control}
        name="message"
        render={({ field }) => (
          <Styled.TextField {...field} variant="outlined" fullWidth />
        )}
      />

      <CustomButton variant="outlined">submit-message</CustomButton>
    </form>
  );
};
