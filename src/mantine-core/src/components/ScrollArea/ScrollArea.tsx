import React, { useState, forwardRef } from 'react';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { DefaultProps, ClassNames } from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './ScrollArea.styles';

export type ScrollAreaStylesNames = ClassNames<typeof useStyles>;

export interface ScrollAreaProps
  extends DefaultProps<ScrollAreaStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Scrollbar size in px */
  scrollbarSize?: number;

  /** Scrollbars type */
  type?: 'auto' | 'always' | 'scroll' | 'hover';

  /** Scroll hide delay in ms, for scroll and hover types only */
  scrollHideDelay?: number;

  /** Reading direction of the scroll area */
  dir?: 'ltr' | 'rtl';

  /** Should scrollbars be offset with padding */
  offsetScrollbars?: boolean;

  /** Get viewport ref */
  viewportRef?: React.ForwardedRef<HTMLDivElement>;
}

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      children,
      className,
      classNames,
      styles,
      scrollbarSize = 12,
      scrollHideDelay = 1000,
      type = 'hover',
      dir = 'ltr',
      offsetScrollbars = false,
      viewportRef,
      ...others
    }: ScrollAreaProps,
    ref
  ) => {
    const [scrollbarHovered, setScrollbarHovered] = useState(false);
    const { classes, cx } = useStyles(
      { scrollbarSize, offsetScrollbars, dir, scrollbarHovered },
      { name: 'ScrollArea', classNames, styles }
    );

    return (
      <RadixScrollArea.Root
        type={type}
        scrollHideDelay={scrollHideDelay}
        dir={dir}
        ref={ref}
        asChild
      >
        <Box className={cx(classes.root, className)} {...others}>
          <RadixScrollArea.Viewport className={classes.viewport} ref={viewportRef}>
            {children}
          </RadixScrollArea.Viewport>
          <RadixScrollArea.Scrollbar
            orientation="horizontal"
            className={classes.scrollbar}
            forceMount
            onMouseEnter={() => setScrollbarHovered(true)}
            onMouseLeave={() => setScrollbarHovered(false)}
          >
            <RadixScrollArea.Thumb className={classes.thumb} />
          </RadixScrollArea.Scrollbar>
          <RadixScrollArea.Scrollbar
            orientation="vertical"
            className={classes.scrollbar}
            forceMount
            onMouseEnter={() => setScrollbarHovered(true)}
            onMouseLeave={() => setScrollbarHovered(false)}
          >
            <RadixScrollArea.Thumb className={classes.thumb} />
          </RadixScrollArea.Scrollbar>
          <RadixScrollArea.Corner className={classes.corner} />
        </Box>
      </RadixScrollArea.Root>
    );
  }
);

ScrollArea.displayName = '@mantine/core/ScrollArea';
