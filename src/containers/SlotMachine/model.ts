interface IndexStoreProps {
  coin: number;
}

interface IndexActionsDispatch {
  addCoin(prize: number): void;
  removeCoin(): void;
}

export interface IndexStates {
  reels: string[];
  message?: string;
}

export type IndexProps = IndexStoreProps & IndexActionsDispatch;

export interface ReelProps {
  fruit?: string;
}
