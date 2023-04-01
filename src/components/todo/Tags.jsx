import React from 'react';
import tags from 'seeders/tags.json'

const Tags = ({items, isFilter, onItemClick, ...attrs}) => {

 const newArrTags = tags.map((tag)=><span className='ui-tag' key={tag.id} onClick={() => onItemClick({title:tag.title, id:tag.id}) }>{tag.title}</span>)
 let listTags = []
// если параметр items передан в компонент то выводим тэги из него, иначе отрисовываем полный список
 items ? listTags = items.map((tag)=><span className='ui-tag' key={tag.id}>{tag.title}</span>) : listTags = newArrTags
 // {items && items.length > 0 ? listTags = items.map((tag)=><span className='ui-tag' key={tag.id}>{tag.title}</span>) : listTags = newArrTags}

 return (
  <div className='view-sidebar__content'>
   {
    isFilter ? (
     <div className='ui-button group isFilter'>
      <p className='text-xs mr-3'>Отфильровать задачи по тегу:</p>
      {listTags}
     </div>
    ) : (
     <div className='ui-button group'>
      {listTags}
     </div>
    )
   }
  </div>
 )
}

export default Tags