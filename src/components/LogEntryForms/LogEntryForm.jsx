import FeedForm from './FeedForm';
import SleepForm from './SleepForm';
import DiaperForm from './DiaperForm';
import CustomForm from './CustomForm';
import MedicalForm from './MedicalForm';
import WalkForm from './WalkForm';

export default function EntryForm({ entryType, updateField, data, updateDateField }) {
  switch (entryType) {
    case 'feed':
      return <FeedForm updateField={updateField} updateDateField={updateDateField} data={data} />;
    case 'sleep':
      return <SleepForm updateField={updateField} updateDateField={updateDateField} data={data} />;
    case 'diaper':
      return <DiaperForm updateField={updateField} updateDateField={updateDateField} data={data} />;
    case 'medical':
      return <MedicalForm updateField={updateField} updateDateField={updateDateField} data={data} />;
    case 'walk':
      return <WalkForm updateField={updateField} updateDateField={updateDateField} data={data} />;
    case 'custom':
      return <CustomForm updateField={updateField} updateDateField={updateDateField} data={data} />;
    default:
      return null;
  }
}
