import React, { memo, FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ListItem } from '../ListItem';

import { SearchItem } from '../../api';

type Props = {
  item: SearchItem;
  index: number;
  isFavorite: boolean;
  removeFromFavorites: (id: string) => void;
};

export const DraggableListItem: FC<Props> = memo(({ index, item, isFavorite, removeFromFavorites }) => {
  return (
    <Draggable key={item.imdbID} draggableId={item.imdbID} index={index}>
      {(subProvided) => (
        <ListItem
          ref={subProvided.innerRef}
          {...item}
          draggable={{
            draggableProps: subProvided.draggableProps,
            dragHandProps: subProvided.dragHandleProps,
          }}
          starClickAction={() => removeFromFavorites(item.imdbID)}
          isFavorite={isFavorite}
        />
      )}
    </Draggable>
  );
});

DraggableListItem.displayName = 'DraggableListItem';
