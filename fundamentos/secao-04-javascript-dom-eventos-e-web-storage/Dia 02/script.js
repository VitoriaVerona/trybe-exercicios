
      // Adicione a tag `h1` com o texto `TrybeTrip - Agência de Viagens` como filho da tag `body`;
      const elementH1 = document.createElement('h1');
      elementH1.innerText = 'TrybeTrip - Agência de Viagens';
      document.body.appendChild(elementH1);

      // Adicione a tag `main` com a classe `main-content` como filho da tag `body`;
      const elementMain = document.createElement('main');
      elementMain.className = 'main-content';
      document.body.appendChild(elementMain);

      // Adicione a tag `section` com a classe `center-content` como filho da tag `main` criada no passo 2;
      const elementSectionCenter = document.createElement('section');
      elementSectionCenter.className = 'center-content';
      elementMain.appendChild(elementSectionCenter);

      // Adicione a tag `p` como filho do `section` criado no passo 3 e coloque algum texto;
      const paragraph = document.createElement('p');
      paragraph.innerHTML = 'Texto Show';
      elementSectionCenter.appendChild(paragraph);

      // Adicione a tag `section` com a classe `left-content` como filho da tag `main` criada no passo 2;
      const elementSectionLeft = document.createElement('section');
      elementSectionLeft.className = 'left-content';
      elementMain.appendChild(elementSectionLeft);

      // Adicione a tag `section` com a classe `right-content` como filho da tag `main` criada no passo 2;
      const elementSectionRight = document.createElement('section');
      elementSectionRight.className = 'right-content';
       elementMain.appendChild(elementSectionRight);

      // Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e classe `small-image`. Esse elemento deve ser filho do `section` criado no passo 5;
      const elementImg = document.createElement('img');
      elementImg.className = 'small-image';
      elementImg.src = 'https://picsum.photos/200';
      elementSectionLeft.appendChild(elementImg);

      // Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, `um`, `dois`, `três`, ... como valores da lista. Essa lista deve ser filha do `section` criado no passo 6;
      const elementUl = document.createElement('ul');
      elementSectionRight.appendChild(elementUl);
      const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
        'Sete', 'Oito', 'Nove', 'Dez']
      for (let num in arrayNumbers) {
        const elementLi = document.createElement('li');
        elementLi.innerHTML = arrayNumbers[num];
        elementUl.appendChild(elementLi);
      }

      // Adicione 3 tags `h3`, todas sendo filhas do `main` criado no passo 2.
      for (let index = 1; index <= 3; index += 1) {
        const elementH3 = document.createElement('h3');
        elementH3.innerHTML = 'Show ' + index;
        elementMain.appendChild(elementH3);
      }


      // Adicione a classe title na tag h1 criada;
      const title = document.querySelector('h1');
      title.className = 'title';

      // Adicione a classe description nas 3 tags h3 criadas;
      const elementsH3 = document.getElementsByTagName('h3');
      for (let index = 0; index < 3; index += 1) {
        elementsH3[index].className = 'description';
      }

      // Remova a `section` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
      const sectionLeftContent = document.getElementsByClassName('left-content')[0];
      elementMain.removeChild(sectionLeftContent);

      // Centralize a `section` criado no passo 6 (aquele que possui a classe `right-content`). Dica: para centralizar, basta configurar o `margin-right: auto` da `section`;
      const sectionRightContent = document.getElementsByClassName('right-content')[0];
      sectionRightContent.style.marginRight='auto';

      // Troque a cor de fundo do elemento pai da `section` criada no passo 3 (aquela que possui a classe `center-content`) para a cor verde;
      const sectionCenterContent = document.getElementsByClassName('center-content')[0];
      sectionCenterContent.parentNode.style.backgroundColor = 'green';

      // Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
      const ul = document.getElementsByTagName('ul')[0];
      ul.lastChild.remove();
      ul.lastChild.remove();
 