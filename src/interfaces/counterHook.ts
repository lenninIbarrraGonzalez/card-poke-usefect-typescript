export interface CounterHook {
  counter: number;
  handleIncrement: (value: number) => void;
  handleDecrement: (value: number) => void;
  handleReset: () => void;
}
