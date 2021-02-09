import { Piece } from './Piece';
import { Square } from './Types';

export type PieceWasMoved = {
  eventType: 'PieceWasMoved';
  piece: Piece;
  from: Square;
  to: Square;
};