// SEO Keywords for Jantri MS Sheet - Based on SattaSport.in (Authentic Industry Keywords)

export const primaryKeywords = [
  'satta king',
  'sattaking', 
  'gali result',
  'disawar result',
  'black satta king 786',
  'satta king live',
  'gali satta chart',
  'faridabad result',
  'ghaziabad result',
  'jantri ms sheet'
];

export const secondaryKeywords = [
  'satta king com',
  'matka result',
  'satta live result',
  'delhi satta',
  'satta number',
  'satta don',
  'desawar chart',
  'gali chart',
  'satta bazar',
  'satta king fast',
  'up satta king',
  'satta king online',
  'satta result today',
  'satta king desawar',
  'gali disawar',
  'satta king gali',
  'matka king',
  'satta matka king',
  'delhi matka',
  'satta king in',
  'satta king live result',
  'black satta',
  'satta com',
  'satta king chart',
  'satta king ghaziabad',
  'upgameking result',
  'satta king faridabad'
];

export const longTailKeywords = [
  'satta king result chart download',
  'gali disawar live result today',
  'black satta king 786 result',
  'faridabad ghaziabad satta result',
  'satta king fast live result',
  'delhi satta king result today',
  'gali satta chart analysis',
  'disawar satta king chart',
  'satta matka live result',
  'up satta king fast result',
  'satta king com live update',
  'gali result satta king',
  'satta bazar live result',
  'satta don black result',
  'kalyan mumbai matka result',
  'rajdhani day night result',
  'time bazar milan result',
  'satta king record chart',
  'ghaziabad satta king result',
  'faridabad satta live result',
  'satta king matka app free download',
  'live satta result update',
  'satta king game online',
  'matka boss result today'
];

export const locationKeywords = [
  'india satta king',
  'delhi satta bazar',
  'mumbai satta king result',
  'gali satta result delhi',
  'faridabad satta result',
  'ghaziabad satta king',
  'up satta king result',
  'rajasthan satta bazar',
  'gujarat satta matka',
  'haryana satta king',
  'gujarat matka result',
  'maharashtra satta matka',
  'goa matka game',
  'mp satta king',
  'up matka result'
];

export const getAllKeywords = () => {
  return [
    ...primaryKeywords,
    ...secondaryKeywords,
    ...longTailKeywords,
    ...locationKeywords
  ].join(', ');
};

export const getRandomKeywords = (count = 10) => {
  const allKeywords = [
    ...primaryKeywords,
    ...secondaryKeywords,
    ...longTailKeywords
  ];
  
  const shuffled = allKeywords.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).join(', ');
};
