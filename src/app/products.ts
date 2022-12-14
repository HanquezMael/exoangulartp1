export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Crayon de Papier XL',
    price: 799,
    description: 'Le plus grand crayon de papier de france.',
  },
  {
    id: 2,
    name: 'Patate à motier chaude',
    price: 699,
    description:
      "Une patate trop chaude c'est difficile de la manger toute suite, une patate froide n'est pas une bonne option.. donc une patate à moitier chaude est un bon plan",
  },
  {
    id: 3,
    name: 'Canard qui fait pouet',
    price: 299,
    description: 'On aimes tous les canards. Encore plus quand ils pouetent',
  },
  {
    id: 4,
    name: 'Chaussette propre',
    price: 5803,
    description:
      'Une seul chaussette propre.. pour avoir la deuxieme il faut payer une deuxieme fois',
  },
  {
    id: 5,
    name: 'Bouton rouge',
    price: 350,
    description: 'Voulez vous un bouton rouge ?',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
