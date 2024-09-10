export interface OptionsProps {
  options: string[];
  onClick: (option: string) => void;
  choosenOption: string | null;
}
