import { entryTypes } from '../../helpers/constants';

export default function EntryTypeSelector({
  entryType,
  setEntryType,
  setFormData,
  baseFormData,
}) {
  return (
    <div className="mb-3">
      <div className="d-flex flex-wrap gap-3 justify-content-start">
        {entryTypes.map((type) => (
          <button
            key={type.value}
            type="button"
            className={`btn ${
              entryType === type.value ? 'btn-accent' : 'btn-outline-accent'
            }`}
            onClick={() => {
              setEntryType(type.value);
              setFormData(baseFormData);
            }}
            style={{
              padding: entryType ? '0.5rem 1rem' : '1.5rem 2rem',
              fontSize: entryType ? '1rem' : '1.25rem',
              flex: '1 1 calc(50% - 1rem)',
              minWidth: '150px',
            }}
          >
            <span className="me-2" style={{ fontSize: '1.5rem' }}>
              {type.emoji}
            </span>
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
}
