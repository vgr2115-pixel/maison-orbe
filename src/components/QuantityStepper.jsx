import { Minus, Plus } from 'lucide-react';

export default function QuantityStepper({ value, onChange, max = 9, label = 'Quantité' }) {
  return (
    <div className="inline-flex items-center border border-espresso/20">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        disabled={value <= 1}
        aria-label={`Diminuer la ${label.toLowerCase()}`}
        className="flex h-10 w-10 items-center justify-center text-espresso/70 transition-colors hover:text-espresso disabled:opacity-30"
      >
        <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
      </button>
      <span className="w-10 text-center text-[13px] tabular-nums text-espresso" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label={`Augmenter la ${label.toLowerCase()}`}
        className="flex h-10 w-10 items-center justify-center text-espresso/70 transition-colors hover:text-espresso disabled:opacity-30"
      >
        <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
      </button>
    </div>
  );
}