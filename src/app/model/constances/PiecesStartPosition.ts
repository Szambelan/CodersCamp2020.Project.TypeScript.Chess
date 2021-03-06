import { Side, SquareWithPiece } from '../Types';
import { Bishop, King, Knight, Pawn, Queen, Rook } from '../pieces';

export const PIECES_START_POSITION: SquareWithPiece = {
  A1: new Rook(Side.WHITE),
  B1: new Knight(Side.WHITE),
  C1: new Bishop(Side.WHITE),
  D1: new Queen(Side.WHITE),
  E1: new King(Side.WHITE),
  F1: new Bishop(Side.WHITE),
  G1: new Knight(Side.WHITE),
  H1: new Rook(Side.WHITE),
  A2: new Pawn(Side.WHITE),
  B2: new Pawn(Side.WHITE),
  C2: new Pawn(Side.WHITE),
  D2: new Pawn(Side.WHITE),
  E2: new Pawn(Side.WHITE),
  F2: new Pawn(Side.WHITE),
  G2: new Pawn(Side.WHITE),
  H2: new Pawn(Side.WHITE),
  A8: new Rook(Side.BLACK),
  B8: new Knight(Side.BLACK),
  C8: new Bishop(Side.BLACK),
  D8: new Queen(Side.BLACK),
  E8: new King(Side.BLACK),
  F8: new Bishop(Side.BLACK),
  G8: new Knight(Side.BLACK),
  H8: new Rook(Side.BLACK),
  A7: new Pawn(Side.BLACK),
  B7: new Pawn(Side.BLACK),
  C7: new Pawn(Side.BLACK),
  D7: new Pawn(Side.BLACK),
  E7: new Pawn(Side.BLACK),
  F7: new Pawn(Side.BLACK),
  G7: new Pawn(Side.BLACK),
  H7: new Pawn(Side.BLACK),
};
