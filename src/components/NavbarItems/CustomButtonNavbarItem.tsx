/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

export default function CustomDogfoodNavbarItem(props: {
  content: string;
  mobile?: boolean;
}): JSX.Element | null {

  return (
    <div className={clsx({
      'navbar__item': !props.mobile,
      [styles.mobile_buttom]: !!props.mobile,
      })}>
      <button
        onClick={() => {
          alert("I'm a Book a demo");
        }}
        className={clsx(
          'button button--outline button--secondary',
          {
            'button--block': !!props.mobile,
          }
        )}
      >
        {props.content}
      </button>
    </div>
  );
}
