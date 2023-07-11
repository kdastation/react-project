import { FC } from 'react';
import { Flex, FlexProps } from 'shared/ui/Stack/Flex/Flex';

export const VStack: FC<Omit<FlexProps, 'direction'>> = (
  props,
) => <Flex direction="column" {...props} />;
