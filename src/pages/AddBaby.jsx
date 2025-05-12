import { useState } from "react";

export default function AddBaby() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send POST to /api/babies
    alert(`Added baby: ${name}, born ${birthDate}, gender: ${gender}`);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 style={{ color: "#023047" }}>Add Your Baby</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Baby Name</label>
          <input type="text" className="form-control" value={name}
            onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label>Date of Birth</label>
          <input type="date" className="form-control" value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label>Gender</label>
          <select className="form-select" value={gender}
            onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select...</option>
            <option value="girl">Girl</option>
            <option value="boy">Boy</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#fb8500", border: "none" }}>
          Save Baby
        </button>
      </form>
    </div>
  );
}
