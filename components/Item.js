import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';
import ItemButton from './styles/ItemButton';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;

    return <ItemStyles>
      {item.image && <img src={item.image} alt={item.title} />}
      <Title>
        <Link href={{
          pathname: 'item',
          query: { id: item.id },
        }}>
          <a>
            {item.title}
          </a>
        </Link>
      </Title>
      <PriceTag>
        {formatMoney(item.price)}
      </PriceTag>
      <p>{item.description}</p>
      <div className="buttonList">
        <ItemButton>
          <Link href={{
            pathname: 'update',
            query: { id: item.id },
          }}>
            <a>Edit</a>
          </Link>
        </ItemButton>  
        <DeleteItem id={item.id}>Delete</DeleteItem>
        <AddToCart id={item.id}/>
      </div>
    </ItemStyles>
  }
}
