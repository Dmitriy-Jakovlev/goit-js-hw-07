const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listItem = document.querySelector('#ingredients');

  const liItemsAdd = (array) => {
      const liArray = array.map(item =>{
          const newLi = document.createElement('li');
          newLi.textContent = item;
          return newLi;
      })
      
      listItem.append(...liArray);
      };

      liItemsAdd(ingredients);