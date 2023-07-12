import { FC } from 'react';
import { Flex, FlexProps } from '@/shared/ui/Stack/Flex/Flex';

export const HStack: FC<Omit<FlexProps, 'direction'>> = (
  props,
) => <Flex direction="row" {...props} />;
