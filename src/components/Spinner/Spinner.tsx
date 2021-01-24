import React, { FC } from 'react';

import SpinnerSVG from 'components/SVG/SpinnerSVG';
import styles from './Spinner.module.css';

export const SPINNER_TEST_ID = 'spinner';

export enum SpinnerType {
  Local = 'local',
  FullPage = 'fullPage',
}

type SpinnerProps = {
  width?: number;
  height?: number;
  type?: SpinnerType;
};

const Spinner: FC<SpinnerProps> = ({
  width = 38,
  height = 38,
  type = SpinnerType.Local,
}) => {
  const SpinnerSvg = (
    <SpinnerSVG width={width} height={height} className={styles.spinner} />
  );

  if (type === SpinnerType.Local) {
    return SpinnerSvg;
  }

  return (
    <div data-testid={SPINNER_TEST_ID} className={styles.wholePageCover}>
      {SpinnerSvg}
    </div>
  );
};

export default Spinner;
