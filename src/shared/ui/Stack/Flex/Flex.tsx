import { FC, HTMLAttributes, DetailedHTMLProps } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type FlexProps = {
  align: FlexAlign,
  justify: FlexJustify,
  direction: FlexDirection,
  wrap: FlexWrap,
  gap?: FlexGap,
  max?: boolean
} & DivProps

const alignClasses: Record<FlexAlign, string> = {
  start: styles.align_start,
  center: styles.align_center,
  end: styles.align_end,
};

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justify_start,
  center: styles.justify_center,
  between: styles.justify_between,
  end: styles.justify_end,
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.row,
  column: styles.column,
};

const wrapClasses: Record<FlexWrap, string> = {
  wrap: styles.wrap,
  nowrap: styles.nowrap,
};

const gapClasses: Record<FlexGap, string> = {
  4: styles.gap_4,
  8: styles.gap_8,
  16: styles.gap_16,
  24: styles.gap_24,
  32: styles.gap_32,
};

export const Flex: FC<FlexProps> = ({
  gap,
  wrap = 'nowrap',
  direction = 'row',
  justify = 'start',
  align = 'start',
  max = false,
  children,
  ...otherProps
}) => {
  const classes = [
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    wrapClasses[wrap],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [styles.max]: max,
  };

  return (
    <div className={classNames(styles.flex, mods, classes)} {...otherProps}>
      {children}
    </div>
  );
};
