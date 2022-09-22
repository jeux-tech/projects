import Chip from "components/chip/Chip";
import Typography from "components/typography/Typography";
import { motion } from "framer-motion";
import moment from "moment";
import useNotesStore, { Note } from "store/use-notes";
import styled from "styled-components";
import { Delete } from "styled-icons/material-rounded";
import theme from "theme";

const backgrounds = ["#9FB8D0", "#9494B3", "#FAB89E", "#84A98C", "#F490BE"];

interface Props extends Note {}

const StyledNoteHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing(2, 3)};
`;

const StyledChip = styled(Chip)`
  cursor: pointer;
`;

const StyledNoteWrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.white._90};
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  cursor: grab;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: ${theme.shadows._2};
    transform: scale(1.05);
  }
  &:active {
    box-shadow: ${theme.shadows._3};
    transform: scale(1.1);
    z-index: 10;
  }
`;

const StyledContentWrapper = styled.div<{ noteId: number }>`
  background-color: ${({ noteId }) => backgrounds[noteId % backgrounds.length]};
  padding: ${theme.spacing(2, 3)};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledDescription = styled.div`
  flex: 1;
`;

const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${theme.spacing(2)};
`;

const NoteCard: React.FC<Props> = ({ ...note }) => {
  const { id, title, content, createdAt, completed } = note;
  const { toggleNote, removeNote } = useNotesStore();

  const onToggleCompleted = () => {
    toggleNote(note);
  };

  const onRemoveNote = () => {
    removeNote(id);
  };

  return (
    <StyledNoteWrapper
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0,
      }}
      transition={{ duration: 0.2 }}
      layout
    >
      <StyledNoteHeader>
        <Typography weight="semi-bold" variant="h6" color="typography_100">
          {title}
        </Typography>
        <StyledActions>
          <div onClick={onToggleCompleted}>
            <StyledChip color={completed ? "states_success" : "primary_100"}>
              {completed ? "Completed" : "To do"}
            </StyledChip>
          </div>
          <div onClick={onRemoveNote}>
            <StyledChip color="states_error">
              <Delete
                width={20}
                height={20}
                color={theme.colors.states.error}
              />
            </StyledChip>
          </div>
        </StyledActions>
      </StyledNoteHeader>
      <StyledContentWrapper noteId={id}>
        <StyledDescription>
          <Typography>{content}</Typography>
        </StyledDescription>
        <Typography align="right" variant="span" color="white_60">
          {moment(createdAt).fromNow()}
        </Typography>
      </StyledContentWrapper>
    </StyledNoteWrapper>
  );
};

export default NoteCard;
