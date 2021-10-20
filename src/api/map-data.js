import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text: Html = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      Html,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};

// const { inspect } = require('util'); //
// const dados = require('./dados.json'); //
// console.log(inspect(mapData(dados), null, null, true)); //
