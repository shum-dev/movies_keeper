import React, { FC } from 'react';
import { SearchItem } from '../api/index';
import PosterPlaceholder from '../assets/poster-placeholder.png';
import { StarIcon } from '../assets/icons/StarIcon';
import { HamburgerIcon } from '../assets/icons/HamburgerIcon';
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';
import '../styles/ListItem.css';

interface ListItem extends SearchItem {
  onItemClick?: () => void;
  starClickAction: () => void;
  isFavorite: boolean;
  draggable?: {
    draggableProps?: DraggableProvidedDraggableProps;
    dragHandProps?: DraggableProvidedDragHandleProps;
  };
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItem>(
  ({ Title, Poster, Type, Year, onItemClick, starClickAction, isFavorite, draggable }, ref) => (
    <li className="ListItem" onClick={onItemClick} ref={ref} {...draggable?.draggableProps}>
      <div className="ListItem-LGroup">
        {draggable && (
          <div {...draggable?.dragHandProps}>
            <HamburgerIcon
              width={50}
              height={50}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </div>
        )}
        <div className="ListItem-Info">
          <h3>{Title}</h3>
          <div>Type: {Type}</div>
          <div>Year: {Year}</div>
        </div>
      </div>
      <div className="ListItem-RGroup">
        <img className="ListItem-Poster" src={Poster === 'N/A' ? PosterPlaceholder : Poster} />
        <StarIcon
          width={50}
          height={50}
          fillColor={isFavorite ? '#65c5f2' : 'white'}
          onClick={(e) => {
            e.stopPropagation();
            starClickAction();
          }}
        />
      </div>
    </li>
  ),
);

ListItem.displayName = 'ListItem';
