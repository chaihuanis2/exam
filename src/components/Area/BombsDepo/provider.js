// import React, {createContext, useContext} from 'react';
//
// const BombsDepoContext = createContext({
//     createBomb: () => {
//     }
// });
//
// const BombsDepoProvider = props => {
//     let bombs = 0;
//
//     const createBomb = () => {
//         bombs++;
//         console.log(bombs);
//         alert('asd')
//     }
//
//     const bombsDepoContext = {
//         createBomb: createBomb
//     };
//
//     return (
//         <BombsDepoContext.Provider value={bombsDepoContext}>
//             {props.children}
//         </BombsDepoContext.Provider>
//     );
// }
//
// const BombsDepo = () => useContext(BombsDepoContext)
//
// export {BombsDepoProvider, BombsDepo};
