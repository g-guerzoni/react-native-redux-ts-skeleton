interface IndexStoreProps {
  name: string;
  coin: number;
}

interface IndexActionsDispatch {}

export type IndexProps = IndexStoreProps & IndexActionsDispatch;
