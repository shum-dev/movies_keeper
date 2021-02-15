import React, { FC } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { SearchItem } from '../../api';
import { DraggableListItem } from './DroggableListItem';
import '../../styles/Favorites.css';

type FavoritesProps = {
  onDragEnd: (result: DropResult) => void;
  removeFromFavorites: (id: string) => void;
  filteredFavorites?: SearchItem[];
};

export const Favorites: FC<FavoritesProps> = ({ onDragEnd, removeFromFavorites, filteredFavorites }) => {
  return (
    <div className="Favorite-container">
      {filteredFavorites && !filteredFavorites.length && 'Sorry, no matches were found for your query.'}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul className="Favorites-List" ref={provided.innerRef} {...provided.droppableProps}>
              {filteredFavorites &&
                filteredFavorites.map((item, index) => (
                  <DraggableListItem
                    key={item.imdbID}
                    item={item}
                    index={index}
                    isFavorite={true}
                    removeFromFavorites={removeFromFavorites}
                  />
                ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
