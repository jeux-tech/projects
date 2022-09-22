import AddNoteForm from "components/add-note-form/AddNoteForm";
import GridWrapper from "components/grid-wrapper/GridWrapper";
import NoteCard from "components/note/Note";
import Typography from "components/typography/Typography";
import { matchSorter } from "match-sorter";
import { useMemo } from "react";
import useNotesStore from "store/use-notes";
import styled from "styled-components";
import { Minus, Plus } from "styled-icons/boxicons-regular";
import theme from "theme";

type Props = {
  view: string;
};

const StyledMyNotesWrapper = styled.div``;

const StyledColumnsSelector = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${theme.spacing(2)};
  padding: ${theme.spacing(2, 3)};
`;

const StyledPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing(2, 3)};
`;

const MyNotes = ({ view }: Props) => {
  const { notes, columns, query, setColumns } = useNotesStore();
  const todoNotes = notes.filter((note) => !note.completed);
  const completedNotes = notes.filter((note) => note.completed);
  const minCols = 1;

  const localNotes = useMemo(() => {
    const list = view === "completed" ? completedNotes : todoNotes;
    return matchSorter(list, query, { keys: ["title", "content"] });
  }, [view, query, notes]);

  const addColumn = () => {
    setColumns(columns + 1);
  };

  const removeColumn = () => {
    if (columns > minCols) {
      setColumns(columns - 1);
    }
  };

  return (
    <StyledMyNotesWrapper>
      <AddNoteForm />
      <StyledPageHeader>
        <Typography variant="h5" size="sm">
          {`List: ${view === "completed" ? "Completed" : "To do"}`}
        </Typography>
        <StyledColumnsSelector>
          <Typography variant="span" weight="semi-bold">
            Columns:
          </Typography>
          <Minus
            cursor="pointer"
            width={12}
            height={12}
            color={theme.colors.white._100}
            onClick={removeColumn}
          />
          <Typography variant="span" weight="semi-bold">
            {columns}
          </Typography>
          <Plus
            cursor="pointer"
            width={12}
            height={12}
            color={theme.colors.white._100}
            onClick={addColumn}
          />
        </StyledColumnsSelector>
      </StyledPageHeader>
      <div style={{ marginLeft: theme.spacing(4) }}>
        {localNotes.length === 0 && (
          <Typography variant="h6" weight="thin" color="white_60">
            No notes added yet
          </Typography>
        )}
      </div>
      <GridWrapper cols={columns}>
        {localNotes.map((note, index) => (
          <NoteCard {...note} key={index} />
        ))}
      </GridWrapper>
    </StyledMyNotesWrapper>
  );
};

export default MyNotes;
