import { Piece } from './pieces';

export const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export type Column = typeof columns[number];
export type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Square = { column: Column; row: Row };
export enum Side {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
}
export type SquareWithPiece = { [key: string]: Piece };
export type Vector = { col: number; row: number };
