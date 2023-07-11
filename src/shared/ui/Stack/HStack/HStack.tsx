import { Flex, FlexProps } from 'shared/ui/Stack/Flex/Flex';
import { FC } from 'react';

export const HStack: FC<Omit<FlexProps, 'direction'>> = (
  props,
) => <Flex direction="row" {...props} />;
