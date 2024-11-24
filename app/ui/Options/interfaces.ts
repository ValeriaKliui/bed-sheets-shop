import { AdditionalPropertiesKeys } from '@lib/constants/types';

export interface OptionsProps {
  options: string[];
  name: AdditionalPropertiesKeys;
  onChange?: (option: string) => void;
  type?: string;
}
