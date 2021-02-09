import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { ChessBoardView } from '../../../../src/app/view/ChessBoardView';
import { WebChessView } from '../../../../src/app/view/web/WebChessView';
import { ViewEventBus } from '../../../../src/app/view/events/ViewEventBus';
import { SquareWasClicked } from '../../../../src/app/view/events/SquareWasClicked';
import { PiecesBoardPositions } from '../../../../src/app/model/Types';
import { PIECES_START_POSITION } from '../../../../src/app/model/Constances';

describe('Web Chess Board View with starting pieces positions', () => {
  const publishViewEventMock = jest.fn();
  const viewEventBus: ViewEventBus = {
    listenOn: jest.fn(),
    publish: publishViewEventMock,
  };
  const piecesPositions: PiecesBoardPositions = PIECES_START_POSITION;
  const chessBoardView: ChessBoardView = new WebChessView(viewEventBus);
  chessBoardView.showChessBoard(piecesPositions);

  it('Chessboard should have 64 squares', () => {
    const board = document.getElementById('chessBoardId');
    expect(board).not.toBeNull();
    const squareList = board?.getElementsByTagName('div');

    expect(squareList?.length).toBe(64);
  });

  it('Square d1 should be light', async () => {
    const d1Square = await screen.findByTestId('d1');

    expect(d1Square).toHaveClass('square--light');
  });

  it('Square f8 should be dark', async () => {
    const f8Square = await screen.findByTestId('f8');

    expect(f8Square).toHaveClass('square--dark');
  });

  it('when click on square, then square was clicked', async () => {
    const square = await screen.findByTestId('a2');
    userEvent.click(square);

    expect(publishViewEventMock).toBeCalledWith(new SquareWasClicked({ x: 1, y: 2 }));
  });

  it('Square a1 should contain white rook', async () => {
    const a1Square = await screen.findByTestId('a1');
    const a1WhiteRook = await screen.findByTestId('a1-img');
    const image = a1WhiteRook.getAttribute('src');

    expect(a1Square).toContainElement(a1WhiteRook);
    expect(image).toBe('../static/img/pieces/white-rook.svg');
  });

  it('Square e7 should contain black pawn', async () => {
    const e7Square = await screen.findByTestId('e7');
    const e7BlackPawn = await screen.findByTestId('e7-img');
    const image = e7BlackPawn.getAttribute('src');

    expect(e7Square).toContainElement(e7BlackPawn);
    expect(image).toBe('../static/img/pieces/black-pawn.svg');
  });

  it('Square g8 should contain black knight', async () => {
    const g8Square = await screen.findByTestId('g8');
    const g8WBlackKnight = await screen.findByTestId('g8-img');
    const image = g8WBlackKnight.getAttribute('src');

    expect(g8Square).toContainElement(g8WBlackKnight);
    expect(image).not.toBe('../static/img/pieces/black-pawn.svg');
    expect(image).toBe('../static/img/pieces/black-knight.svg');
  });

  it('Square e4 should be empty', async () => {
    const e4Square = await screen.findByTestId('e4');

    expect(e4Square).toBeEmptyDOMElement();
  });
});