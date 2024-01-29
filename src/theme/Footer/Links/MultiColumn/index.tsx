import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';
import type {Props} from '@theme/Footer/Links/MultiColumn';
import CustomFooterLink from '@site/src/components/FooterLinkItems/CustomFooterLink';

type ColumnType = Props['columns'][number];
type ColumnItemType = ColumnType['items'][number];

function ColumnLinkItem({item}: {item: ColumnItemType}) {
  return item.html ? (
    <li
      className="footer__item"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item poppins">
      <LinkItem item={item} />
    </li>
  );
}

function Column({column}: {column: ColumnType}) {
  return (
    <div className="col footer__col">
      <div className="footer__title sora">{column.title}</div>
      <ul className="footer__items clean-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinksMultiColumn({columns}: Props): JSX.Element {
  return (
    <div className="row footer__links">
      <CustomFooterLink />
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  );
}
