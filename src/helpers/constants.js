export const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const feedingTypes = [
  { id: 0, name: "breastfeeding", description: "Breastfeeding" },
  { id: 1, name: "pumped_breastmilk", description: "Pumped Breastmilk" },
  { id: 2, name: "formula", description: "Formula" },
  { id: 3, name: "mixed_feeding", description: "Mixed Feeding" },
  { id: 4, name: "solid_food", description: "Solid Food" },
  { id: 5, name: "snack", description: "Snack" },
  { id: 6, name: "self_feeding", description: "Self Feeding" },
  { id: 7, name: "tube_feeding", description: "Tube Feeding" },
  { id: 99, name: "other_feeding", description: "Other" }
];

export const diaperTypes = [
  { id: 0, name: "wet", description: "Wet" },
  { id: 1, name: "dirty", description: "Dirty" },
  { id: 2, name: "mixed", description: "Mixed" },
  { id: 3, name: "blowout", description: "Blowout" },
  { id: 4, name: "rash_check", description: "Rash Check" },
  { id: 5, name: "dry_check", description: "Dry Check" },
  { id: 6, name: "exploratory", description: "Exploratory" },
  { id: 99, name: "other_diaper", description: "Other" }
];

export const sleepTypes = [
  { id: 0, name: "nap", description: "Nap" },
  { id: 1, name: "overnight", description: "Overnight" },
  { id: 2, name: "early_nap", description: "Early Nap" },
  { id: 3, name: "late_nap", description: "Late Nap" },
  { id: 4, name: "contact_nap", description: "Contact Nap" },
  { id: 5, name: "crib_nap", description: "Crib Nap" },
  { id: 6, name: "stroller_nap", description: "Stroller Nap" },
  { id: 7, name: "car_nap", description: "Car Nap" },
  { id: 8, name: "rocked_sleep", description: "Rocked Sleep" },
  { id: 9, name: "swing_sleep", description: "Swing Sleep" },
  { id: 99, name: "other_sleep", description: "Other" }
];

export const walkTypes = [
  { id: 0, name: "stroller_walk", description: "Stroller Walk" },
  { id: 1, name: "carrier_walk", description: "Carrier Walk" },
  { id: 2, name: "indoor_walk", description: "Indoor Walk" },
  { id: 3, name: "outdoor_walk", description: "Outdoor Walk" },
  { id: 4, name: "nature_walk", description: "Nature Walk" },
  { id: 5, name: "errand_walk", description: "Errand Walk" },
  { id: 6, name: "group_walk", description: "Group Walk" },
  { id: 7, name: "pet_walk", description: "Pet Walk" },
  { id: 8, name: "short_walk", description: "Short Walk" },
  { id: 9, name: "long_walk", description: "Long Walk" },
  { id: 99, name: "other_walk", description: "Other" }
];

export const tagTypes = [
  { id: 0, name: "growth_spurt", description: "Growth Spurt" },
  { id: 1, name: "vaccination_day", description: "Vaccination Day" },
  { id: 2, name: "sleep_regression", description: "Sleep Regression" },
  { id: 3, name: "teething", description: "Teething" },
  { id: 4, name: "travel_day", description: "Travel Day" },
  { id: 5, name: "first_solid", description: "First Solid" },
  { id: 6, name: "checkup_day", description: "Checkup Day" },
  { id: 7, name: "milestone", description: "Milestone" },
  { id: 99, name: "other_tag", description: "Other" }
];

export const symptomTypes = [
  { id: 0, name: "fever", description: "Fever" },
  { id: 1, name: "colic", description: "Colic" },
  { id: 2, name: "rash", description: "Rash" },
  { id: 3, name: "diarrhea", description: "Diarrhea" },
  { id: 4, name: "teething_pain", description: "Teething Pain" },
  { id: 5, name: "cough", description: "Cough" },
  { id: 6, name: "congestion", description: "Congestion" },
  { id: 7, name: "vomiting", description: "Vomiting" },
  { id: 8, name: "gas", description: "Gas" },
  { id: 9, name: "reflux", description: "Reflux" },
  { id: 99, name: "other_symptom", description: "Other" }
];

export const entryTypes = [
  { value: 'feed', emoji: '🍼', label: 'Feed' },
  { value: 'sleep', emoji: '😴', label: 'Sleep' },
  { value: 'diaper', emoji: '💩', label: 'Diaper' },
  { value: 'walk', emoji: '🚶', label: 'Walk' },
  { value: 'medical', emoji: '🩺', label: 'Medical' },
  { value: 'custom', emoji: '✨', label: 'Custom' },
];
