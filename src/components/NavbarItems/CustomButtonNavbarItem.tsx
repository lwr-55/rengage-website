/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

export default function CustomDogfoodNavbarItem(props: {
  content: string;
  mobile?: boolean;
}): JSX.Element | null {

  return (
    <button
      onClick={() => {
        alert("I'm a Book a demo");
      }}
      className="button button--outline button--secondary"
    >
      {props.content}
      {props.mobile ? ' (mobile)' : ''}
    </button>
  );
}
