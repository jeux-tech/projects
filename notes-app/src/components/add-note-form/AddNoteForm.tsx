import Button from "components/button/Button";
import Input from "components/input/Input";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useNotesStore from "store/use-notes";
import styled from "styled-components";
import { Plus } from "styled-icons/bootstrap";
import { Save } from "styled-icons/heroicons-solid";
import { Delete } from "styled-icons/material-rounded";
import theme from "theme";

type Inputs = {
  title: string;
  content: string;
};

type Props = {};

const StyledAddNoteForm = styled.div`
  padding: ${theme.spacing(3)};
`;

const StyledInputsWrapper = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing(2)};
`;

const AddNoteForm: React.FC<Props> = ({}) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const { addNote, query, setQuery } = useNotesStore();
  const [view, setView] = useState<"add" | "search">("search");

  const onSubmit = (data: Inputs) => {
    addNote({
      id: new Date().getMilliseconds(),
      title: data.title,
      content: data.content,
      createdAt: new Date(),
      completed: false,
    });
    reset({ content: "", title: "" });
  };

  return (
    <StyledAddNoteForm>
      {view === "add" && (
        <StyledInputsWrapper
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 100 }}
          layout
        >
          <Input
            {...register("title", { required: "Title is required" })}
            placeholder="Note title"
            error={!!errors.title?.message}
            helperText={errors.title?.message}
            fullWidth
          />
          <Input {...register("content")} placeholder="Description" fullWidth />
          <Button variant="outlined" onClick={() => setView("search")}>
            <Delete width={32} height={31} color={theme.colors.primary._100} />
          </Button>
          <Button variant="secondary" onClick={handleSubmit(onSubmit)}>
            <Save width={32} height={31} color={theme.colors.white._100} />
          </Button>
        </StyledInputsWrapper>
      )}
      {view === "search" && (
        <StyledInputsWrapper
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 100 }}
          layout
        >
          <Input
            name="search"
            placeholder="Search notes..."
            fullWidth
            value={query}
            onChange={(e) => setQuery(e?.target?.value)}
          />
          <Button variant="secondary" onClick={() => setView("add")}>
            <Plus width={32} height={31} color={theme.colors.white._100} />
          </Button>
        </StyledInputsWrapper>
      )}
    </StyledAddNoteForm>
  );
};

export default AddNoteForm;
